function updateSliderValue(sliderValue, sliderValueText) {
  document.getElementById(sliderValueText).innerHTML = document.getElementById(sliderValue).value;
}

function displayFoodCard() {
  document.querySelector(".popup-box").classList.add("popup-box-appear");
  document.querySelector(".darken-background").style.display="block";
}

function hideFoodCard() {
  document.querySelector(".popup-box").classList.remove("popup-box-appear");
  document.querySelector(".darken-background").style.display="none";
}