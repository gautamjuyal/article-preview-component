const shareBtn = document.getElementById('share-btn');
const shareMenu = document.querySelector('.share-menu')
const component = document.querySelector('.text-section');


shareBtn.addEventListener('click', () => {
    shareMenu.classList.toggle('visible');
    const y = component.clientHeight - shareBtn.offsetTop;
    const x = component.clientWidth - shareBtn.offsetLeft;

    shareMenu.style.bottom = y + 'px';
    shareMenu.style.right = `-${x}px`;
})

window.addEventListener('click', event => {
    if (event.target.closest('div') !== shareMenu && event.target.closest('div') !== shareBtn)
        shareMenu.classList.remove('visible')
})