// Toggle popoup menu
const togglePopupMenu = () => {
    if (popupMenu.style.display === 'block') {
        popupMenu.style.display = 'none'
    } else {
        popupMenu.style.display = 'block';
    }
}

// Buttons to select specific students
const fetchButtons = document.getElementsByClassName('fetch-buttons');
for (const btn of fetchButtons) {
    btn.addEventListener('click', (e) => {
        alert(e.target.id);
    })
}

// Reference to the popup menu and hamburger icon
const popupMenu = document.getElementById('popup-menu');
const hamburger = document.getElementById('hamburger');

popupMenu.addEventListener('click', togglePopupMenu);
hamburger.addEventListener('click', togglePopupMenu);