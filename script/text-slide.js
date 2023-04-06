const stepsSliderTop = document.getElementById("stepsSliderTop");
const textSliderTop = document.getElementById("textSliderTop");

stepsSliderTop.addEventListener("click", function () {
  if (textSliderTop.style.display === "none") {
    textSliderTop.style.display = "block";
  } else {
    textSliderTop.style.display = "none";
  }
});

const stepsSliderMiddle = document.getElementById("stepsSliderMiddle");
const textSliderMiddle = document.getElementById("textSliderMiddle");

stepsSliderMiddle.addEventListener("click", function () {
  if (textSliderMiddle.style.display === "none") {
    textSliderMiddle.style.display = "block";
  } else {
    textSliderMiddle.style.display = "none";
  }
});

const stepsSliderBottom = document.getElementById("stepsSliderBottom");
const textSliderBottom = document.getElementById("textSliderBottom");

stepsSliderBottom.addEventListener("click", function () {
  if (textSliderBottom.style.display === "none") {
    textSliderBottom.style.display = "block";
  } else {
    textSliderBottom.style.display = "none";
  }
});

const stepsIcon = document.querySelectorAll(".steps-icon");

stepsIcon.forEach((stepsIcon) => {
  let isButtonOn = true;
  stepsIcon.addEventListener("click", () => {
    isButtonOn = !isButtonOn;
    stepsIcon.classList.toggle("slider-bottom-on", isButtonOn);
  });
});

  

   

