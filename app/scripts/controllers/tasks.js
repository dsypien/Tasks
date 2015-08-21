angular.module('tasksApp')
  .controller('TasksCtrl', ['$scope', 'projectStoreService', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    $scope.isOneColumn = window.innerWidth < 768;
    $scope.isReadOnlyEditProjectName = true;    
    
    var _dragThreshold = 0,
        _isDraggedOverLeft = true,
        _isDragging = false;


    $scope.$watch(function(){
        return window.innerWidth;
    }, function(){
        //Gets called when window.innerWidth Changes
       $scope.isOneColumn = window.innerWidth < 768;
    });

    $scope.addTask = function(){
    	$scope.project.listAry[0].push($scope.project.task);
    	$scope.project.task = '';
    };

    $scope.moveTask = function(index, fromAry, toAry){
        var task = fromAry.splice(index, 1)[0];
        toAry.push(task);
    };

    $scope.removeTask = function(index, targetAry){
        targetAry.splice(index, 1);
    };

    $scope.getVisibilityClass = function(){
        if($scope.project.listAry[2].length === 0){
            return 'hidden';
        }
        else{
            return '';
        }
    };

    function createOptions () {
        return{
          placeholder: 'task-container',
          connectWith: '.sortable-container'
        };
    }

    function getIndexOfListId(id){
        return new Number( id.replace(/list_/, '') );
    }

    function moveLists(fromIndex, toIndex, doInsertLeft){
        var fromList = $scope.project.listAry[fromIndex],
            fromListName = $scope.project.listAryNames[fromIndex],
            listAry = $scope.project.listAry,
            listAryNames = $scope.project.listAryNames,
            movingListToRight = fromIndex < toIndex;

        if(toIndex > listAryNames.length){
            listAry.push(undefined);
            listAryNames.push(undefined);
        }

        if(doInsertLeft && movingListToRight){
            listAry.splice(toIndex - 1, 
                           0,
                           listAry.splice(fromIndex, 1)[0]);
            listAryNames.splice(toIndex - 1,
                           0,
                           listAryNames.splice(fromIndex, 1)[0]);
        } else if(doInsertLeft && !movingListToRight){
            listAry.splice(toIndex, 
                           0,
                           listAry.splice(fromIndex, 1)[0]);
            listAryNames.splice(toIndex,
                           0,
                           listAryNames.splice(fromIndex, 1)[0]);
        }else{
            listAry.splice(toIndex + 1, 
                           0,
                           listAry.splice(fromIndex, 1)[0]);
            listAryNames.splice(toIndex + 1,
                           0,
                           listAryNames.splice(fromIndex, 1)[0]);
        }
    }

    function closest(elem, className){
        do{
            if(elem.className.indexOf('list_container') > -1){
                return elem;
            }            
        }while(elem = elem.parentElement)
        
        return  null;
    }

    $scope.drag = function(event){
        event.dataTransfer.setData("text", event.target.id);
        _isDragging = true;
    }

    $scope.dragEnter = function(event){
        var curElement = event.target;
        do{
            if(curElement.className.indexOf('list_container') > -1){
                _dragThreshold = curElement.clientWidth / 2;

                event.stopPropagation();
                break;
            }
        }while(curElement = curElement.parentElement)
    }

    $scope.dragOver = function(event) {
        if(event.offsetX > _dragThreshold){
            _isDraggedOverLeft = false;
        }
        else{
            _isDraggedOverLeft = true;
        }

        event.preventDefault();
    }

    $scope.drop = function (event){
        var hoveringOverID = closest(event.target, 'list_container').id,
            draggedID = event.dataTransfer.getData("text"),
            overIndex = getIndexOfListId(hoveringOverID),
            draggedIndex = getIndexOfListId(draggedID);

        if(draggedIndex != overIndex){
            $scope.$apply( function(){
                moveLists(draggedIndex, overIndex, _isDraggedOverLeft);
            });
        }

        _isDragging = false;
        event.preventDefault();
    }

    $scope.sortableOptionsList = [createOptions('toDo'), createOptions('working'), createOptions('finished')];

    $scope.$watch('project', function(){
    	projectStoreService.save($scope.project);
    }, true);
  }]);
