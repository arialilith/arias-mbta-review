document.addEventListener('DOMContentLoaded', () => {
    const clickableItems = document.querySelectorAll('.clickable');
    const title = document.getElementById('review-title');
    const content = document.getElementById('review-content');

    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            title.textContent = item.textContent;
            content.textContent = item.getAttribute('data-content');
        });
    });
});