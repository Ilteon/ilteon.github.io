
$(document).ready(function(){
	"use strict";
	$(window).on("scroll",function(){
		var scroll = $(this).scrollTop();
		$("section").stop().animate({"left":-scroll},1);
	});
});
