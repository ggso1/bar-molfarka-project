// Отримуємо елементи
const openModalBtn = document.querySelector('.modal-btn-open');
const closeModalBtn = document.querySelector('.modal-btn-close');
const modalBackdrop = document.querySelector('.backdrop');

// Відкриття модального вікна
openModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('is-hidden');
});

// Закриття модального вікна
closeModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.add('is-hidden');
});


