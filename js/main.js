document.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.clickable');
    const popup = document.querySelector('.popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.querySelector('.popup-close');

    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            popupTitle.textContent = item.textContent;
            popupContent.textContent = item.getAttribute('data-content');
            popup.classList.add('open');
            popupOverlay.classList.add('open');
        });
    });

    popupOverlay.addEventListener('click', () => {
        popup.classList.remove('open');
        popupOverlay.classList.remove('open');
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('open');
        popupOverlay.classList.remove('open');
    });
});