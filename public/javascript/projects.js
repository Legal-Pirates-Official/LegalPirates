const disphead = document.querySelector('.disph1');
const dispp = document.querySelector('.dispp');
const swiperslide1 = document.querySelector('.swiperslide1');
const swiperslide2 = document.querySelector('.swiperslide2');
const swiperslide3 = document.querySelector('.swiperslide3');

document.querySelectorAll('.projectnum').forEach(function (project, index) {
	project.addEventListener('click', function (e) {
		document.querySelector('.container').classList.add('deactive');
		document.querySelector('.leftspan').classList.add('deactive');
		document.querySelector('.container2').classList.add('active');
		document.querySelector('.disph1').classList.add('active');
		document.querySelector('.ourprojects').style.height = '100vh';
		switch (index) {
			case 0:
				swiperslide1.style.backgroundImage = `url(${sliderImages[0][0]})`;
				swiperslide2.style.backgroundImage = `url(${sliderImages[0][1]})`;
				swiperslide3.style.backgroundImage = `url(${sliderImages[0][2]})`;
				break;
			case 1:
				swiperslide1.style.backgroundImage = `url(${sliderImages[1][0]})`;
				swiperslide2.style.backgroundImage = `url(${sliderImages[1][1]})`;
				swiperslide3.style.backgroundImage = `url(${sliderImages[1][2]})`;
				break;
			case 2:
				swiperslide1.style.backgroundImage = `url(${sliderImages[2][0]})`;
				swiperslide2.style.backgroundImage = `url(${sliderImages[2][1]})`;
				swiperslide3.style.backgroundImage = `url(${sliderImages[2][2]})`;
				break;
			case 3:
				swiperslide1.style.backgroundImage = `url(${sliderImages[3][0]})`;
				swiperslide2.style.backgroundImage = `url(${sliderImages[3][1]})`;
				swiperslide3.style.backgroundImage = `url(${sliderImages[3][2]})`;
				break;
			case 4:
				swiperslide1.style.backgroundImage = `url(${sliderImages[4][0]})`;
				swiperslide2.style.backgroundImage = `url(${sliderImages[4][1]})`;
				swiperslide3.style.backgroundImage = `url(${sliderImages[4][2]})`;
				break;
		}
		return 1;
	});
	switch (index) {
		case 0:
			disphead.innerHTML = heading[0];
			dispp.innerHTML = para[0];
			project.style.backgroundImage = `url(${image[0]})`;
			break;
		case 1:
			disphead.innerHTML = heading[1];
			dispp.innerHTML = para[1];
			project.style.backgroundImage = `url(${image[1]})`;
			break;
		case 2:
			disphead.innerHTML = heading[2];
			dispp.innerHTML = para[2];
			project.style.backgroundImage = `url(${image[2]})`;
			break;
		case 3:
			disphead.innerHTML = heading[3];
			dispp.innerHTML = para[3];
			project.style.backgroundImage = `url(${image[3]})`;
			break;
		case 4:
			disphead.innerHTML = heading[4];
			dispp.innerHTML = para[4];
			project.style.backgroundImage = `url(${image[4]})`;
			break;
		// case 5:
		// 	disphead.innerHTML = heading[5];
		// 	dispp.innerHTML = para[5];
		// 	project.style.backgroundImage = `url(${image[5]})`;
		// 	break;
		// case 6:
		// 	disphead.innerHTML = heading[6];
		// 	dispp.innerHTML = para[6];
		// 	project.style.backgroundImage = `url(${image[6]})`;
		// 	break;
		// case 7:
		// 	disphead.innerHTML = heading[7];
		// 	dispp.innerHTML = para[7];
		// 	project.style.backgroundImage = `url(${image[7]})`;
		// 	break;
		// default:
		// 	disphead.innerHTML = 'Something Went Wrong';
		// 	dispp.innerHTML = 'Please Refresh the Page';
		// 	break;
	}
});

document.querySelector('.backbtn').addEventListener('click', function (e) {
	document.querySelector('.container').classList.remove('deactive');
	document.querySelector('.container2').classList.remove('active');
	document.querySelector('.disph1').classList.remove('active');
	document.querySelector('.leftspan').classList.remove('deactive');
	document.querySelector('.ourprojects').style.height = '300vh';
});

var swiper = new Swiper('.mySwiper', {
	direction: 'vertical',
	loop: true,
	centeredSlides: true,
	spaceBetween: 30,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});
