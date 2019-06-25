$(document).ready(function(){
  $(".plan_title").click(function(){
	  $(this).stop();
	  $(".plan_passage").animate({width:'900px'},"300");
	  $(".guide_passage").animate({width:'0px'},"300");
	  $(".jz_passage").animate({width:'0px'},"300");
	  // $(".guide_passage").animate({"width","0px"},"slow");
	  // $(".jz_passage").animate({"width","0px"},"slow");
    // alert("背景颜色 = " + $("p").css("background-color"));
  });
  
  $(".guide_title").click(function(){
	  $(this).stop();
  	  $(".plan_passage").animate({width:'0px'},"300");
  	  $(".guide_passage").animate({width:'900px'},"300");
  	  $(".jz_passage").animate({width:'0px'},"300");
    // alert("背景颜色 = " + $("p").css("background-color"));
  });
  
  $(".jz_title").click(function(){
  	  $(this).stop();
  	  $(".plan_passage").animate({width:'0px'},"300");
  	  $(".guide_passage").animate({width:'0px'},"300");
  	  $(".jz_passage").animate({width:'900px'},"300");
    // alert("背景颜色 = " + $("p").css("background-color"));
  });
});