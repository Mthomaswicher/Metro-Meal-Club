$(document).ready(function(){
  $('.autoplay').slick({
		autoplay:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
    arrows:false,
    dots:false,

	});

  $("#slide1").click(function(event){
    event.preventDefault();
    $("#slidedown1").slideDown();
    $("#slide1").hide();
  });

  $("#less1").click(function(event){
    event.preventDefault();
    $("#slidedown1").slideUp();
    $("#slide1").show();
  });
  $("#slide2").click(function(event){
    event.preventDefault();
    $("#slidedown2").slideDown();
    $("#slide2").hide();
  });

  $("#less2").click(function(event){
    event.preventDefault();
    $("#slidedown2").slideUp();
    $("#slide2").show();
  });

  $("#slide3").click(function(event){
    event.preventDefault();
    $("#slidedown3").slideDown();
    $("#slide3").hide();
  });

  $("#less3").click(function(event){
    event.preventDefault();
    $("#slidedown3").slideUp();
    $("#slide3").show();
  });
});
