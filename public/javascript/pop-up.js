const crossButton = document.querySelector('.cross-button');
const popUpSection = document.querySelector('.pop-up-section');

function noScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', noScroll);

crossButton.addEventListener('click', () => {
    popUpSection.style.display = 'none';
    window.removeEventListener('scroll', noScroll);
});