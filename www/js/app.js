angular.module('starter', ['ionic'])

.controller('AppCtrl', function($scope, $timeout) {
    $scope.moveButtons = function() {
        var buttons = document.getElementById('buttons');

        move(buttons)
        .ease('in-out')
        .y(200)
        .duration('0.5s')
        .end();
    };

    $scope.animateVisuals = function() {
    	var bg = document.getElementById('contentBG');
    	var header = document.getElementById('header');
    	move(bg)
    	.set('padding', '10%')
    	.duration('2s')
    	.end(function() {
    		move(header)
    		.set('background-color', '#4DB6AC')
    		.duration('2s')
    		.end();
    	});
    };

    $scope.blink = function() {
    	var bg = document.getElementById('contentBG');

    	var highlightBack = move(bg)
    	.set('background', '#FFFFFF')
    	.duration('0.2s')
    	.end();

    	var highlight = move(bg)
    	.set('background', '#25cecd')
    	.duration('0.2s')
    	.then(highlightBack)
    	.end();
    };

    $scope.timer = function() {
    	if($scope.timerTimeout) {
    		$timeout.cancel($scope.timerTimeout);
    	}
    	$scope.time = 0;
    	$scope.timerTimeout = $timeout(onTimerTimeout,0);
    };

    function onTimerTimeout(){
    	$scope.time++;
    	var timer = document.getElementById('myTimer');

    	move(timer)
    	.ease('snap')
    	.set('opacity', 1)
    	.scale(1.4)
    	.duration('0s')
    	.end();

    	move(timer)
    	.ease('out')
    	.x(150)
    	.rotate(140)
    	.scale(.1)
    	.set('opacity', 0)
    	.duration('1s')
    	.end();
    	$scope.timerTimeout = $timeout(onTimerTimeout,1000);
    };
});
