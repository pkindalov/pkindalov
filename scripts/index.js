const allEffects = [
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shakeX",
  "shakeY",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "heartBeat",
  "backInDown",
  "backInLeft",
  "backInRight",
  "backInUp",
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "fadeInTopLeft",
  "fadeInTopRight",
  "fadeInBottomLeft",
  "fadeInBottomRight",
  "flip",
  "flipInX",
  "flipInY",
  "lightSpeedInRight",
  "lightSpeedInLeft",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "hinge",
  "jackInTheBox",
  "rollIn",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "slideInUp",
];

window.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementsByClassName("container");
  const rndNum = generateRandomInteger(allEffects.length - 1);
  const animationPrefix = "animate__";
  if (!container || !container[0]) return;
  const animationClass = animationPrefix + allEffects[rndNum];
  // console.log(animationClass);
  container[0].classList.add(animationClass);

  const ctaBtn = document.getElementsByClassName("cta-btn-cont")?.[0];

  if (ctaBtn && !ctaBtn.hasListener) {
    ctaBtn.addEventListener("click", function () {
      console.log("here");
      ctaBtn.hasListener = true;
      if (ctaBtn.classList.contains("animate__bounce"))
        ctaBtn.classList.remove("animate__bounce");
      ctaBtn.classList.add("animate__hinge");
    });
  }
});

window.onload = () => {
  window.scrollTo(0, 1200);
};

const generateRandomInteger = (max) => Math.floor(Math.random() * max) + 1;
