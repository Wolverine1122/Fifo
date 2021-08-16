let truncateCounter = 0;

//Show the value of slider in text
function updateSliderValue(sliderValue, sliderValueText) {
  $("#" + sliderValueText).html($("#" + sliderValue).val());
}

//Display and hide the popup card
function displayFoodCard() {
  $(".popup-box").addClass("popup-box-appear");
  $(".darken-background").css("display", "block");
}
function hideFoodCard() {
  $(".popup-box").removeClass("popup-box-appear");
  $(".darken-background").css("display", "none");
}

// Slice text in food summary on card
function truncateParagraph (targetParagraph) {
  if (truncateCounter == 0) {
    $("." + targetParagraph).addClass("truncate");
    $(".toggleTruncateClick").html("Read More");
    truncateCounter++;
  } else {
    $("." + targetParagraph).removeClass("truncate");
    $(".toggleTruncateClick").html("Read Less");
    truncateCounter = 0;
  }
}
truncateParagraph('foodSummary');



//Change card display to/from full
function changeCardDisplayDimension() {
  $(".popup-box").toggleClass("cardDisplayFull");
}


// 1. Simple mode, it styles document scrollbar:
$(function() {  
  $("html").niceScroll({
    cursorcolor: "hsl(31, 94%, 60%)",
    cursorwidth: "12px",
    hwacceleration: true
  });
  $(".popup-box").niceScroll({
    cursorcolor: "hsl(31, 94%, 60%)",
    cursorwidth: "10px",
    hwacceleration: true
  });
});

$(".popup-box").scroll(function(){
  $(".popup-box").getNiceScroll().resize();
});