// const aboutHeading = document.querySelector('.about-heading');

gsap
    .timeline({
        scrollTrigger: {
            trigger: '.about-heading',
        }
    })
    .to('.about-heading', {
        delay: .5,
        duration: 1,
        x: "0%",
        stagger: .1,
    })


gsap
    .timeline({
        scrollTrigger: {
            trigger: '.about-paragraph-ptag',
        }
    })
    .to('.about-paragraph-ptag', {
        duration: 1,
        x: "0%",
        y: "0%",
        stagger: .1,
    })


const rightClickList = document.querySelector('.right-click-list');
const button = document.querySelector('.button-53');

button.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let x = e.offsetX-80 + "px";
    let y = e.offsetY-40 + "px";
    rightClickList.style.top = y;
    rightClickList.style.left = x;
    rightClickList.classList.add('active');
});

window.addEventListener('click', (e) => {
    rightClickList.classList.remove('active');
})
