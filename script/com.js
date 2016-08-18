
function doMove ( obj, attr, dir, target, fre, endFn ) {
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timers );
	
	obj.timers = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timers );
			
			/*
			if ( endFn ) {
				endFn();
			}
			*/
			endFn && endFn();
			
		}
		
	}, fre);
}

function opacity(obj, num, target ,fre,endFn) {
	
		num = getStyle(obj, 'opacity')*100 < target ? num : -num;
		
		clearInterval( obj.opacity );
		
		obj.opacity = setInterval(function () {
			
			var speed = parseInt(getStyle(obj, 'opacity')*100) + num;
			
			if ( speed > target && num > 0 || speed < target && num < 0 ) {
				speed = target;
			}
			
			obj.style.opacity = speed/100;
			obj.style.filter = 'alpha(opacity='+ speed +')';
			
			if ( speed == target ) {
				clearInterval( obj.opacity );
				endFn && endFn();
			}

		}, fre);
}

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }