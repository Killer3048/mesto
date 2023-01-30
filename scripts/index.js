const editButton = document.querySelector('.profile__info-edit');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__btn-close');
const form = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__form-input_type_name');
const jobInput = document.querySelector('.popup__form-input_type_job');
const name = document.querySelector('.profile__info-name');
const job = document.querySelector('.profile__info-job');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_is-opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
});

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup_is-opened');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popup.classList.remove('popup_is-opened');
});
