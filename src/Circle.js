var Circle = function(param,two,Event){

		var obj = new Two.Ellipse(param.x, param.y, param.radius, param.radius);
		obj.linewidth = param.linewidth || 0;
		obj.fill = param.fill || "#888";
		obj.scale = 0; 
		obj.wave = Event.wave;
		obj.move = Event.move;
		obj.swing = Event.swing;
		obj.circularMove = Event.circularMove;
		obj.moveLeft = Event.moveLeft;
		obj.moveTo = Event.moveTo;

		// render
		two.scene.add(obj);
		two.update();

		// initiate the obj
		init();
		function init(){
			tween = requestAnimationFrame(init.bind(obj));
			if(this.scale !== undefined){
				this.scale < 1 ? this.scale += 0.05 : cancelAnimationFrame(tween);
			}
		}

		//return obj
		return obj;
	}

module.exports = Circle