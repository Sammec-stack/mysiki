  // Функция для показа всплывающего окна через 4 секунды
  setTimeout(() => {
    document.getElementById('popupOverlay').style.display = 'flex';
}, 5000);

// Функция для закрытия окна
function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}