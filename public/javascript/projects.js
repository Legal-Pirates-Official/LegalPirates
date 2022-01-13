const disphead = document.querySelector(".disph1");
const dispp = document.querySelector(".dispp");
const swiperslide2 = document.querySelector(".swiperslide2 img");
const swiperslide1 = document.querySelector(".swiperslide1 img");
const swiperslide3 = document.querySelector(".swiperslide3 img");

var renderimg = (pos) => {
  // swiperslide1.style.backgroundImage = `url(${sliderImages[pos][0]})`;
  // swiperslide2.style.backgroundImage = `url(${sliderImages[pos][1]})`;
  // swiperslide3.style.backgroundImage = `url(${sliderImages[pos][2]})`;
  swiperslide1.src = sliderImages[pos][0]
  swiperslide2.src = sliderImages[pos][1]
  swiperslide3.src = sliderImages[pos][2]
  disphead.innerHTML = heading[pos];
  dispp.innerHTML = para[pos];
  console.log("function");
  return 0;
};

document.querySelectorAll(".projectnum").forEach(function (project, index) {
  project.addEventListener("click", function (e) {
    document.querySelector(".container").classList.add("deactive");
    document.querySelector(".leftspan").classList.add("deactive");
    document.querySelector(".container2").classList.add("active");
    document.querySelector(".disph1").classList.add("active");
    window.location.href = "#projects";
    if (screen.width <= 1150) {
      document.querySelector(".ourprojects").style.height = "115vh";
    } else {
      document.querySelector(".ourprojects").style.height = "90vh";
    }
    switch (index) {
      case 0:
        renderimg(0)
        console.log(index);
        break;
      case 1:
        renderimg(1)
        console.log(index);

        break;
      case 2:
        renderimg(2)
        console.log(index);

        break;
      case 3:
        renderimg(3)
        console.log(index);

        break;
      case 4:
        renderimg(4)
        console.log(index);

        break;
      default:
        break;
    }
    return 0
  });
  switch (index) {
    case 0:
      project.style.backgroundImage = `url(${image[0]})`;
      console.log("switch"+index);

      break;
    case 1:
      project.style.backgroundImage = `url(${image[1]})`;
      console.log("switch"+index);

      break;
    case 2:
      project.style.backgroundImage = `url(${image[2]})`;
      console.log("switch"+index);

      break;
    case 3:
      project.style.backgroundImage = `url(${image[3]})`;
      console.log("switch"+index);

      break;
    case 4:
      project.style.backgroundImage = `url(${image[4]})`;
      console.log("switch"+index);

      break;
  }
});

document.querySelector(".backbtn").addEventListener("click", function (e) {
  document.querySelector(".container").classList.remove("deactive");
  document.querySelector(".container2").classList.remove("active");
  document.querySelector(".disph1").classList.remove("active");
  document.querySelector(".leftspan").classList.remove("deactive");
  document.querySelector(".ourprojects").style.height = "230vh";
});

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

