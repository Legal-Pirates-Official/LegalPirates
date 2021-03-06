const homeLink = document.querySelector('.home-link');
const projectsLink = document.querySelector('.projects-link');
const technologiesLink = document.querySelector('.technologies-link');
const aboutLink = document.querySelector('.about-link');
const servicesLink = document.querySelector('.services-link');

const navTranslate = (
	link1,
	link2,
	link3,
	link4,
	translate1,
	translate2,
	translate3,
	translate4,
	translate5
) => {
	gsap
		.timeline()
		.to(link1, { '--translate': translate1 })
		.to(link2, { '--translate': translate2 })
		.to(link3, { '--translate': translate3 })
		.to(link4, { '--translate': translate4 })
		.to(link4, { '--translate': translate5 });
};

document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', (e) => {
		switch (link.getAttribute('data-current')) {
			case 'home':
				navTranslate(
					homeLink,
					projectsLink,
					technologiesLink,
					aboutLink,
					servicesLink,
					'0',
					'-110%',
					'-110%',
					'-110%',
					'-110%'
				);
				window.location.href = '#home';
				document.querySelector('.nav-link-container').classList.remove('open');
				break;
			case 'projects':
				navTranslate(
					homeLink,
					projectsLink,
					technologiesLink,
					aboutLink,
					servicesLink,
					'-110%',
					'0',
					'-110%',
					'-110%',
					'-110%'
				);
				window.location.href = '#projects';
				document.querySelector('.nav-link-container').classList.remove('open');
				break;
			case 'technologies':
				navTranslate(
					homeLink,
					projectsLink,
					technologiesLink,
					aboutLink,
					servicesLink,
					'-110%',
					'-110%',
					'0',
					'-110%',
					'-110%'
				);
				window.location.href = '#technologies';
				document.querySelector('.nav-link-container').classList.remove('open');
				break;
			case 'about':
				navTranslate(
					homeLink,
					projectsLink,
					technologiesLink,
					aboutLink,
					servicesLink,
					'-110%',
					'-110%',
					'-110%',
					'0',
					'-110%'
				);
				window.location.href = '#about';
				document.querySelector('.nav-link-container').classList.remove('open');
				break;
			case 'services':
				navTranslate(
					homeLink,
					projectsLink,
					technologiesLink,
					aboutLink,
					servicesLink,
					'-110%',
					'-110%',
					'-110%',
					'-110%',
					'0'
				);
				window.location.href = '../views/services.html';
				document.querySelector('.nav-link-container').classList.remove('open');
				break;
		}
	});
});

document.querySelector('.ham-btn').addEventListener('click', (e) => {
	document.querySelector('.nav-link-container').classList.toggle('open');
});

if (innerWidth >= 700) {
	addEventListener('scroll', (e) => {
		const scrollTop = window.scrollY;
		if (scrollTop == 0) {
			gsap
				.timeline()
				.to('.navbar', { '--blur': '0', backgroundColor: 'transparent' })
				.to('.nav-link', { '--after-color': 'transparent' });
		} else {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '#projects',
						start: 'top top'
					}
				})
				.to('.navbar', { '--blur': '30px', backgroundColor: 'black' })
				.to('.nav-link', { '--after-color': 'black' });
		}
	});
}
