angular.module('tasksApp')
  .controller('TasksCtrl', ['$scope', 'projectStoreService', function ($scope, projectStoreService) {
    'use strict';

    $scope.project = projectStoreService.getCurrent();
    $scope.isOneColumn = window.innerWidth < 768;
    $scope.isReadOnlyEditProjectName = true;

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

    function drag(event){
        event.dataTransfer.setData("text", event.target.id);
    }

    function drop(event){
        event.preventDefault();
        var draggedID = event.dataTransfer.getData("text");
        var droppedID = closest(event.target, 'list_container').id;

        var draggedIndex = getIndexOfListId(draggedID);
        var droppedIndex = getIndexOfListId(droppedID);

        console.log('moving ' + draggedIndex + ' to ' + droppedIndex);
    }
    

    function getIndexOfListId(id){
        return new Number( id.replace(/list_/, '') );
    }

    function allowDrop(ev) {
        console.log(ev);
        ev.preventDefault();
    }

    function closest(elem, className){
        do{
            if(elem.className.indexOf('list_container') > -1){
                return elem;
            }            
        }while(elem = elem.parentElement)
        
        return  null;
    }

    $scope.drag = drag;
    $scope.allowDrop = allowDrop;
    $scope.drop = drop;

    $scope.sortableOptionsList = [createOptions('toDo'), createOptions('working'), createOptions('finished')];

    $scope.$watch('project', function(){
    	projectStoreService.save($scope.project);
    }, true);
  }]);
