const popup = document.querySelector(".popup");
const form = document.querySelector(".popup__form");
const closeButton = document.querySelector(".popup__btn-close");
const editButton = document.querySelector(".profile__info-edit");
const nameInput = document.querySelector(".popup__form-input_type_name");
const jobInput = document.querySelector(".popup__form-input_type_job");
const name = document.querySelector(".profile__info-name");
const job = document.querySelector(".profile__info-job");

const popupMesto = document.querySelector('.popup_type_mesto')
const openMestoPopup = document.querySelector('.profile__button-add')
const closeMestoPopup = popupMesto.querySelector('.popup__btn-close')
const nameImageInput = popupMesto.querySelector('input[name="imageName"]')
const linkImageInput = popupMesto.querySelector('input[name="imageSrc"]')
const formElementMesto = popupMesto.querySelector('.popup__form')

const popupImage = document.querySelector('.popup_type_image')
const closePopupImage = popupImage.querySelector('.popup__btn-close')

const cardTemplate = document.querySelector('.template-card').content.querySelector('.card')
const cardElements = document.querySelector('.elements')
const initialCards = [{
        name: "Ижевск",
        link: "https://i.ibb.co/3zkc9pd/izhevsk.jpg",
    },
    {
        name: "Йошкар-Ола",
        link: "https://i.ibb.co/HPZW3ZD/ioshkar-ola.jpg",
    },
    {
        name: "Кремль",
        link: "https://i.ibb.co/wK2VG3g/kreml.jpg",
    },
    {
        name: "Коноха",
        link: "https://i.ibb.co/hMHggKQ/konoha.jpg",
    },
    {
        name: "Москва",
        link: "https://i.ibb.co/jVRWB7g/moscow.jpg",
    },
    {
        name: "Псков",
        link: "https://i.ibb.co/885pFdS/pskov.jpg",
    },
];

const openAndClosePopup = item => {
    item.classList.toggle("popup_is-opened");
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
};

const editProfile = event => {
    event.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popup.classList.remove("popup_is-opened");
};

const createCard = item => {
    const card = cardTemplate.cloneNode(true);
    const [image, like, trash] = [card.querySelector(".card__image"), card.querySelector(".card__like"), card.querySelector(".card__trash")];
    [image.src, image.alt] = [item.link, item.name];
    card.querySelector(".card__title").textContent = item.name;
    like.addEventListener("click", () => like.classList.toggle("card__like_active"));
    trash.addEventListener('click', () => card.remove());
    image.addEventListener("click", () => {
        const [popupImageImg, popupImageTitle] = [popupImage.querySelector(".popup__image"), popupImage.querySelector(".popup__image-title")];
        openAndClosePopup(popupImage);
        [popupImageImg.src, popupImageImg.alt, popupImageTitle.textContent] = [item.link, item.name, item.name];
    });

    return card;
};

const renderCards = () => cardElements.prepend(...initialCards.map(createCard));
renderCards();

formElementMesto.addEventListener('submit', event => {
    event.preventDefault();
    const name = nameImageInput.value;
    const link = linkImageInput.value;
    const card = createCard({ name, link });
    cardElements.appendChild(card);
    popupMesto.classList.remove('popup_is-opened');
});

form.addEventListener("submit", editProfile);
editButton.addEventListener("click", () => openAndClosePopup(popup));
closeButton.addEventListener("click", () => openAndClosePopup(popup));
openMestoPopup.addEventListener("click", () => openAndClosePopup(popupMesto));
closeMestoPopup.addEventListener("click", () => openAndClosePopup(popupMesto));
closePopupImage.addEventListener("click", () => openAndClosePopup(popupImage));