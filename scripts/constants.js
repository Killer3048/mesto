const popups = document.querySelectorAll('.popup');


const popupProfile = document.querySelector('.popup_type_profile')
const formProfile = popupProfile.querySelector(".popup__form");

const closeButton = document.querySelector(".popup__btn-close");
const closeButtonProfile = formProfile.querySelector('.popup__btn-close')

const editButton = document.querySelector(".profile__info-edit");
const nameInput = document.querySelector(".popup__form-input_type_name");
const jobInput = document.querySelector(".popup__form-input_type_job");
const profileName = document.querySelector(".profile__info-name");
const profileJob = document.querySelector(".profile__info-job");

const popupMesto = document.querySelector('.popup_type_mesto')
const formMesto = popupMesto.querySelector(".popup__form");
const openMestoPopup = document.querySelector('.profile__button-add')
const closeMestoPopup = popupMesto.querySelector('.popup__btn-close')
const nameImageInput = popupMesto.querySelector('input[name="imageName"]')
const linkImageInput = popupMesto.querySelector('input[name="imageSrc"]')
const formElementMesto = popupMesto.querySelector('.popup__form')

const popupImage = document.querySelector('.popup_type_image')
const popupImageImg = popupImage.querySelector('.popup__image')
const popupImageTitle = popupImage.querySelector('.popup__image-title')
const closePopupImage = popupImage.querySelector('.popup__btn-close')

const cardTemplate = document.querySelector('.template-card').content.querySelector('.card')
const cardElements = document.querySelector('.elements')
const initialCards = [{
        name: "Команда анонимусов",
        link: "https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/96070/eb77b5da-74e7-4663-bf5f-4262fdcb10a3/8888.jpg?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20230212%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20230212T122627Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9e29790c44867629b768c8f613123b3ff076406fc79c4714a0c7c49e9dbd8516",
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
        link: "https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/96070/0a965c41-a4b0-4a14-b74e-8f838040e668/hIinTwdp_4x.jpg?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20230212%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20230212T165245Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=604880eb6772ac941539caae72ce1c32758a818232777780cade65a16dfb5250",
    },
    {
        name: "Москва в 2100 году",
        link: "https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/96070/b81aa4bf-ba11-457f-aeb4-3f2828784818/PoFOIqk1_4x.jpg?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20230212%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20230212T171502Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7d96a97e812ae2c7642d6997672c3306ae817a3deb3b1a7b90d84d42a3272c17",
    },
    {
        name: "Деревня скрытая в листве - Коноха",
        link: "https://pachca-prod-uploads.s3.storage.selcloud.ru/attaches/files/96070/074d4d42-5b22-4433-b030-96d2ab683f64/lsE8cPa4_4x.jpg?response-cache-control=max-age%3D3600%3B&response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=142155_staply%2F20230212%2Fru-1a%2Fs3%2Faws4_request&X-Amz-Date=20230212T172158Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6f216f1e471d7213e8aa1b3f8e1bd18b8e20b8ecfb4534b451e5c1d305e5eec1",
    },
];