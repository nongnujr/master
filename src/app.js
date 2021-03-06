// Main app //
var Circle = require("./Circle");
var Line = require('./Line');
var Text = require('./Text');
var TWEEN = require('tween.js');
var Event = require('./animate/event');
var Shape = require('./Shape');

(function(){

	// Set initial value //
	this.count = 0;
	this.animate = 0;
	this.TWEEN = TWEEN;
	var elem = document.getElementById('space');
	this.two = new Two({fullscreen : true}).appendTo(elem); 
	var pivotCenter = new Line(two);// add center pivot //
	var text = [];

	var createChar = function(text){

		var charecter = Text.Create(text.keyCode);
		var shape = new Shape
			.create(Circle, charecter)
			.moveTo(charecter)
		console.log(charecter.width)
	}

	// initiate screen //
	window.addEventListener('keyup', createChar)

	// Main timeline //
	two.bind("update", function(){

		TWEEN.update();
		this.count = this.count === undefined ? 0 : this.count;
		this.count++;

	}).play();
	
})();

