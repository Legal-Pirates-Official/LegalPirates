const homeLink = document.querySelector('.home-link');
const projectsLink = document.querySelector('.projects-link');
const aboutLink = document.querySelector('.about-link');

document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', (e) => {
		switch (link.getAttribute('data-current')) {
			case 'home':
				navTranslate('#home', homeLink, projectsLink, '0', '-100%', 'top top');
				window.location.href = '#home';
				break;
			case 'projects':
				navTranslate(
					'#projects',
					homeLink,
					projectsLink,
					'100%',
					'0',
					'top top'
				);
				window.location.href = '#projects';
				break;
			case 'about':
				navTranslate('#about', projectsLink, aboutLink, '100%', '0', 'top 10%');
				window.location.href = '#about';
				break;
		}
	});
});

const navTranslate = (trigger, link1, link2, translate1, translate2, start) => {
	gsap
		.timeline({
			scrollTrigger: {
				trigger,
				start
			}
		})
		.to(link1, { '--translate': translate1 })
		.to(link2, { '--translate': translate2 }, '>-=.2');
};

navTranslate('#home', homeLink, projectsLink, '0', '-100%', 'top top');
navTranslate('#projects', homeLink, projectsLink, '100%', '0', 'top top');
navTranslate('#about', projectsLink, aboutLink, '100%', '0', 'top 10%');

addEventListener('scroll', () => {
	const observer1 = new IntersectionObserver((entries) => {
		console.log(entries[0].isVisible);
	});
	observer1.observe(aboutLink);
});
