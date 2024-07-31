document.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.clickable');
    const popup = document.querySelector('.popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.querySelector('.popup-close');

    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            // Set the popup title and content to the clicked item's data attributes
            popupTitle.textContent = item.textContent;
            popupContent.textContent = item.getAttribute('data-content');

            // Show the popup and overlay
            popup.classList.add('open');
            popupOverlay.classList.add('open');
        });
    });

    // Hide popup when clicking on the overlay or close button
    popupOverlay.addEventListener('click', () => {
        popup.classList.remove('open');
        popupOverlay.classList.remove('open');
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('open');
        popupOverlay.classList.remove('open');
    });
});