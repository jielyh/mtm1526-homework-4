$(document).ready(function(){
		$('.tab-buttons a').on('click', function (ev) { // selecting all of a elements, listen for click and perform function (ev)
			
			var tabToShow = $(this).attr('href'); //$(this) = user click on link, info is in href, when href is clicked, puts info variable tabtoshow
			
			$('.tab-group .current') .removeClass('current') //using css selector target .current thats in the .tabgroup and remove the class called 'current
			
			console.log(tabToShow); //trace
			
			$(tabToShow).addClass('current'); //whichever is clicked, add the clas current onto it (show current) 
			
		});
});


