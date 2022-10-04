//DOM Declarations
const btnOpenModal = document.querySelector('.btn-open-modal');
const modal = document.querySelector('.warning-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModalReject = document.querySelector('.btn-response-reject');
const btnCloseModalAccept = document.querySelector('.btn-response-accept');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModalReject.addEventListener('click', closeModal);
btnCloseModalAccept.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);