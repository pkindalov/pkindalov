$(document).ready(() => {
  const flipbookEL = document.getElementById("flipbook");
  console.log(flipbookEL);

  window.addEventListener("resize", function (e) {
    flipbookEL.style.width = "";
    flipbookEL.style.height = "";
    $(flipbookEL).turn("size", flipbookEL.clientWidth, flipbookEL.clientHeight);
  });

  window.addEventListener("keydown", (event) => {
    const direction = event && event.key ? event.key.toLocaleLowerCase() : null;
    switch (direction) {
      case "arrowright":
        $(flipbookEL).turn("next");
        break;
      case "arrowleft":
        $(flipbookEL).turn("previous");
        break;
      default:
        break;
    }
  });

  $(flipbookEL).turn({
    autoCenter: true,
    width: 800,
    height: 700,
  });
});
