// var waypoint = require('/waypoints/lib/jquery.waypoints.min.js');

$(document).ready(function(){
	$('.js--section-about').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
			$('span:first-child').removeClass('name').addClass('name2');
;
		}
		else {
			$('nav').removeClass('sticky');
			$('span:first-child').removeClass('name2').addClass('name');
		}
	}, {
		offset: '100px'
	});

	// var waypoints = $('#handler-first').waypoint(function(direction) {
	//   notify(this.element.id + ' hit 25% from top of window')
	// }, {
	//   offset: '25%'
	// })

});
