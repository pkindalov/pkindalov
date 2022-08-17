$(document).ready(() => {
  const flipbookEL = document.getElementById("flipbook");

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
        // let book = $("#flipbook").find(".cert-img");
        // console.log(book);
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

  $(flipbookEL).bind("turning", function (event, page, corner) {
    //show/hide zoom functionality
    const zoomElementsClasses = [".cert-img"];
    if (zoomElementsClasses && zoomElementsClasses.length === 0) return;

    zoomElementsClasses.forEach((elClass) => {
      let elements = document.querySelectorAll(elClass);
      if (elements && elements.length > 0) {
        for (const element of elements) {
          if (!element.hasListener) {
            element.addEventListener("click", () => zoomIn(element));
            element.hasListener = true;
          }
        }
      }
    });
  });

  function zoomIn(el) {
    const imgPath = el.src;
    //TODO show bigger img
    const zoomedDivCont = document.createElement("div");
    const zoomContent = document.createElement("div");
    createContentDivs({ img: imgPath, parent: zoomContent });
    zoomContent.setAttribute("class", "zoomContent");

    zoomedDivCont.setAttribute("class", "zoomedImg");
    zoomedDivCont.appendChild(zoomContent);

    document.body.appendChild(zoomedDivCont);
  }

  function createContentDivs(data) {
    if (!data) return false;
    const { img, parent } = data;
    if (!img || !parent) return false;
    const imgDivCont = document.createElement("div");
    imgDivCont.setAttribute("class", "imgCont");
    const image = document.createElement("img");
    image.setAttribute("src", img);
    imgDivCont.appendChild(image);
    parent.appendChild(imgDivCont);
    parent.onclick = () => zoomOut(parent);
  }

  function zoomOut(el) {
    if (el) el.remove();
  }
  // const zoomIconEl = document

  // hoverElementsClasses.forEach((elClass) => {
  //   const elements = document.getElementsByClassName(elClass);
  //   if (!elements || elements.length === 0) return;
  //   const oneEl = elements[0];
  //   oneEl.addEventListener("mouseover", () => {
  //     if (oneEl.classList.contains("invisible")) {
  //       oneEl.classList.remove("invisible");
  //       if (!oneEl.classList.contains("visible")) {
  //         oneEl.classList.add("visible");
  //       }
  //     }
  //   });
  //   console.log(oneEl.classList);
  // });
});
