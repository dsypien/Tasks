angular.module('tasksApp')
  .controller('TasksCtrl', ['$scope', 'projectStoreService', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    $scope.isOneColumn = window.innerWidth < 768;
    $scope.isReadOnlyEditProjectName = true;    
    $scope.isDragging = false;
    $scope.isDraggedOverLeft = true;

    var _dragThreshold = 0;

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
        return parseInt(id.replace(/list_/, '') );
    }

    function moveLists(fromIndex, toIndex, doInsertLeft){
        var listAry = $scope.project.listAry,
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

    function closest(elem){
        do{
            if(elem.className.indexOf('list_container') > -1){
                return elem;
            }  
            elem = elem.parentElement;          
        }while(elem);
        
        return  null;
    }

    $scope.drag = function(event){
        event.dataTransfer.setData('text', event.target.id);
        $scope.$apply( function(){
            $scope.isDragging = true;  
        });
    };

    $scope.dragEnter = function(event){
        var curElement = event.target;

        do{
            if(curElement.className.indexOf('list_container') > -1){
                _dragThreshold = curElement.clientWidth / 2;

                $scope.$apply( function(){
                    /* jshint ignore:start */
                    $scope.hoveringOverId = curElement.id;  
                    /* jshint ignore:end */
                });

                event.stopPropagation();
                break;
            }
            curElement = curElement.parentElement;
        }while(curElement);
    };

    $scope.dragOver = function(event) {
        if(event.offsetX > _dragThreshold){
            $scope.isDraggedOverLeft = false;
        }
        else{
            $scope.isDraggedOverLeft = true;
        }

        event.preventDefault();
    };

    $scope.drop = function (event){
        var hoveringOverID = closest(event.target, 'list_container').id,
            draggedID = event.dataTransfer.getData('text'),
            overIndex = getIndexOfListId(hoveringOverID),
            draggedIndex = getIndexOfListId(draggedID);

        if(draggedIndex !== overIndex){
            $scope.$apply( function(){
                moveLists(draggedIndex, overIndex, $scope.isDraggedOverLeft);
                $scope.isDragging = false;
                $scope.hoveringOverId = -1;
            });
        }

        event.preventDefault();
    };

    $scope.sortableOptionsList = [createOptions('toDo'), createOptions('working'), createOptions('finished')];

    $scope.$watch('project', function(){
    	projectStoreService.save($scope.project);
    }, true);
  }]);
