const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const formProfile = popupProfile.querySelector('.popup__form');
const closeButton = document.querySelector('.popup__btn-close');
const closeButtonProfile = formProfile.querySelector('.popup__btn-close');
const editButton = document.querySelector('.profile__info-edit');
const nameInput = document.querySelector('.popup__form-input_type_name');
const jobInput = document.querySelector('.popup__form-input_type_job');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-job');
const popupMesto = document.querySelector('.popup_type_mesto');
const formMesto = popupMesto.querySelector('.popup__form');
const openMestoPopup = document.querySelector('.profile__button-add');
const closeMestoPopup = popupMesto.querySelector('.popup__btn-close');
const nameImageInput = popupMesto.querySelector('input[name="imageName"]');
const linkImageInput = popupMesto.querySelector('input[name="imageSrc"]');
const formElementMesto = popupMesto.querySelector('.popup__form');
const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const closePopupImage = popupImage.querySelector('.popup__btn-close');
const cardTemplate = document.querySelector('.template-card').content.querySelector('.card');
const cardElements = document.querySelector('.elements');


const initialCards = [{
        name: "Команда анонимусов",
        link: "https://img5.goodfon.ru/wallpaper/nbig/5/5e/aboy-ningthouja-by-aboy-ningthouja-watchdogs-legion-legion-w.jpg",
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
        name: "Бог смерти - Рюк",
        link: "https://kartinkin.net/pics/uploads/posts/2022-08/1661449963_2-kartinkin-net-p-oboi-ryuk-krasivo-3.jpg",
    },
    {
        name: "Москва в 2100 году",
        link: "https://www.sonar2050.org/storage/publications/4453/08271890016325089116838.jpg",
    },
    {
        name: "Деревня скрытая в листве - Коноха",
        link: "https://kartinkin.net/pics/uploads/posts/2022-07/1658459129_12-kartinkin-net-p-konokha-art-oboi-12.jpg",
    },
];