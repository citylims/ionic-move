.controller('AppCtrl', function($scope) {
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
    	.set('background', '#B9F6CA')
    	.duration('0.2s')
    	.then(highlightBack)
    	.end();
    };
});
