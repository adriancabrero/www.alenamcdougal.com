// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//resize contact div
$(document).ready(function(){
	
	if(window.innerHeight > "500"){
		
		function resize()
		{
		    var heights = window.innerHeight - 40;
		    document.getElementById("contact-window").style.height = heights + "px";
		}
		resize();
		window.onresize = function() {
		    resize();
		};
		
		
	}
	

});



// Place any jQuery/helper plugins in here.

	// Make menu stick to top of the page when it reaches the top of the page

	// Menu items should highlight when you scroll to the right place on the page (add a css class to differentiate it)

	// Use $(element).offset().top liberally

	// Click on menu element should scroll the page to the proper section

	var NAV_STICK_POSITION = 563;
	var MENU_HEIGHT = 40;
	var SECTION_TOPS = [];
	$(".section").each(function(){			
		SECTION_TOPS.push($(this).offset().top - 1);
	});

	// Particularly if your images affect the height of your page
	// Recalculate when page is done loading
	$(document).load(function(){
		$(".section").each(function(){			
			SECTION_TOPS.push($(this).offset().top);
		});			
	});



	$(".menu").on("click", "li", function(){
	
	
		var sectionClass = $(this).attr("data-section");
	
		var sectionTop = $("." + sectionClass).offset().top - MENU_HEIGHT + 2;
	
		$("html,body").animate({
			scrollTop: sectionTop
		
		});
	
	});


	$(document).scroll(function(){
	
		// This is where we watch for scroll events
		// Check this to decide when things should happen
		if($(document).scrollTop() >= NAV_STICK_POSITION){
			// $(".main-nav").css({
			// 	position: "fixed",
			// 	top: 0					
			// });
		
			$(".menu").addClass("fixed");
		
		}else{
		
			$(".menu").removeClass("fixed");
			// $(".main-nav").css({
			// 	position: "absolute",
			// 	top: NAV_STICK_POSITION					
			// });
		
		}
	
	
	
	
	
		for (var i=0; i < SECTION_TOPS.length-1; i++) {
		
			if($(document).scrollTop() >= SECTION_TOPS[i]-MENU_HEIGHT && $(document).scrollTop() < SECTION_TOPS[i+1]){
				var sectionClass = "section" + (i+1);
				$(".menu .active").removeClass("active");
			
				$("li[data-section='" + sectionClass +"']").addClass("active");
			
				window.location.hash = sectionClass;
			}else if($(document).scrollTop() > SECTION_TOPS[SECTION_TOPS.length-1] ){
				var sectionClass = "section" + (SECTION_TOPS.length);
			
				$(".menu .active").removeClass("active");
				$("li[data-section='" + sectionClass +"']").addClass("active");
				window.location.hash = sectionClass;					
			}
		};
	
	
		// $.each(SECTION_TOPS, function(index, value){
		// 	
		// 	if($(document).scrollTop() >= value-MENU_HEIGHT && $(document).scrollTop() < SECTION_TOPS[index+1]){
		// 		var sectionClass = "section" + (i+1);
		// 		$(".menu .active").removeClass("active");
		// 		
		// 		$("li[data-section='" + sectionClass +"']").addClass("active");
		// 	}else if($(document).scrollTop() > SECTION_TOPS[SECTION_TOPS.length-1] ){
		// 		var sectionClass = "section" + (SECTION_TOPS.length);
		// 		
		// 		$(".menu .active").removeClass("active");
		// 		$("li[data-section='" + sectionClass +"']").addClass("active");
		// 	}
		// });
	
	});



	// On page load
	// Look at


	if(window.location.hash != ""){
		// Determine which section the page should scroll to
	
		var hashClass = window.location.hash;
		var section = $("." + hashClass.substr(1));
		if(section.length > 0){
			var sectionTop = section.offset().top - MENU_HEIGHT + 2;
			$(document).scrollTop(sectionTop);
		
		}

	}



	if($(window).width() < 600){
	
		// When you click on the menu bar
		// You need to to slide out the menu
		// And slide over the page
		// (Just add the right CSS classes)
		// When that menu is slide out, any new clicks should close it ($(body).one...)
	
	
		$(".menu-bar").click(function(event){
			$(".wrap").addClass("open");
			$(".menu").addClass("open");
		
			// Stop click event from bubbling up to the body element
			// before adding additional handler
			// event.stopPropagation();
		
			$("body").one("click", function(){
				console.log("Body clicked");
					$(".wrap").removeClass("open");
					$(".menu").removeClass("open");
				
				
				})
		
		})
	
	
	}
