const disphead = document.querySelector(".disph1");
const dispp = document.querySelector(".dispp");
const swiperslide1 = document.querySelector(".swiper-slide-1");
const swiperslide2 = document.querySelector(".swiper-slide-2");
const swiperslide3 = document.querySelector(".swiper-slide-3");



document.querySelectorAll(".projectnum").forEach(function (project, index) {
  project.addEventListener("click", function (e) {
    document.querySelector(".container").classList.add("deactive");
    document.querySelector(".leftspan").classList.add("deactive");
    document.querySelector(".container2").classList.add("active");
    document.querySelector(".disph1").classList.add("active");
    document.querySelector(".ourprojects").style.height = "100vh";
    switch (index) {
      case 0:
        disphead.innerHTML = heading[0];
        dispp.innerHTML = para[0];
        break;
      case 1:
        disphead.innerHTML = heading[1];
        dispp.innerHTML = para[1];
        break;
      case 2:
        disphead.innerHTML = heading[2];
        dispp.innerHTML = para[2];
        break;
      case 3:
        disphead.innerHTML = heading[3];
        dispp.innerHTML = para[3];
        break;
      case 4:
        disphead.innerHTML = heading[4];
        dispp.innerHTML = para[4];
        break;
      case 5:
        disphead.innerHTML = heading[5];
        dispp.innerHTML = para[5];
        break;
      case 6:
        disphead.innerHTML = heading[6];
        dispp.innerHTML = para[6];
        break;
      case 7:
        disphead.innerHTML = heading[7];
        dispp.innerHTML = para[7];
        break;
      default:
          disphead.innerHTML = "Something Went Wrong";
          dispp.innerHTML = "Please Refresh the Page";
        break;
    }
    return (1);
  });
});

document.querySelector(".backbtn").addEventListener("click", function (e) {
  document.querySelector(".container").classList.remove("deactive");
  document.querySelector(".container2").classList.remove("active");
  document.querySelector(".disph1").classList.remove("active");
  document.querySelector(".leftspan").classList.remove("deactive");
  document.querySelector(".ourprojects").style.height = "300vh";
});

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
