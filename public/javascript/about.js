gsap
    .timeline({
        scrollTrigger: {
            trigger: '.about-heading',
        }
    })
    .to('.about-heading', {
        duration: 1,
        x: "0%",
        stagger: .1,
    })
gsap
    .timeline({
        scrollTrigger: {
            trigger: '.left-side-inner',
        }
    })
    .to('.left-side-inner', {
        duration: 1,
        x: "0%",
        stagger: .1,
    })
gsap
    .timeline({
        scrollTrigger: {
            trigger: '.button-53',
        }
    })
    .to('.button-53', {
        delay: .1,
        duration: 1,
        x: "0%",
        stagger: .1,
    })
gsap
    .timeline({
        scrollTrigger: {
            trigger: '.right-side p',
        }
    })
    .to('.right-side p', {
        delay: .1,
        duration: 1,
        x: "0%",
        stagger: .1,
    })





const rightClickList = document.querySelector('.right-click-list');
const button = document.querySelector('.button-53');

button.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let x = e.offsetX - 80 + "px";
    let y = e.offsetY - 40 + "px";
    rightClickList.style.top = y;
    rightClickList.style.left = x;
    rightClickList.classList.add('active');
});

window.addEventListener('click', (e) => {
    rightClickList.classList.remove('active');
})
