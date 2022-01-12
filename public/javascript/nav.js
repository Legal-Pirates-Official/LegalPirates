const homeLink = document.querySelector('.home-link');
const projectsLink = document.querySelector('.projects-link');
const aboutLink = document.querySelector('.about-link');

const navTranslate = (
	link1,
	link2,
	link3,
	translate1,
	translate2,
	translate3
) => {
	gsap
		.timeline()
		.to(link1, { '--translate': translate1 })
		.to(link2, { '--translate': translate2 })
		.to(link3, { '--translate': translate3 });
};

document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', (e) => {
		switch (link.getAttribute('data-current')) {
			case 'home':
				navTranslate(homeLink, projectsLink, aboutLink, '0', '-100%', '-100%');
				window.location.href = '#home';
				break;
			case 'projects':
				navTranslate(homeLink, projectsLink, aboutLink, '-100%', '0', '-100%');
				window.location.href = '#projects';
				break;
			case 'about':
				navTranslate(homeLink, projectsLink, aboutLink, '-100%', '-100%', '0');
				window.location.href = '#about';
				break;
		}
	});
});
