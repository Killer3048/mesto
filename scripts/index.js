const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
};
const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
};

const editProfile = (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
};

//я если выношу, у меня ломается все :/ Да и не понимаю зачем выносить, если эти окнстанты ищутся только тут в темплейте

const createCard = (item) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.card__image');
    const like = card.querySelector('.card__like');
    const trash = card.querySelector('.card__trash');
    image.src = item.link;
    image.alt = item.name;
    card.querySelector('.card__title').textContent = item.name;
    like.addEventListener('click', () => like.classList.toggle('card__like_active'));
    trash.addEventListener('click', () => card.remove());
    image.addEventListener('click', () => {
        openPopup(popupImage);
        popupImageImg.src = item.link;
        popupImageImg.alt = item.name;
        popupImageTitle.textContent = item.name;
    });
    return card;
};

const renderCards = () => cardElements.prepend(...initialCards.map(createCard));
renderCards();

formElementMesto.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = nameImageInput.value;
    const link = linkImageInput.value;
    const card = createCard({
        name,
        link
    });
    cardElements.prepend(card);
    closePopup(popupMesto);
    formElementMesto.reset();
});

formProfile.addEventListener('submit', editProfile);

editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile);
});

const closeByEscape = (event) => {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
};

popups.forEach(function(popup) {
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup(popup);
        }
    });
});


closeButton.addEventListener("click", () => closePopup(popupProfile));
openMestoPopup.addEventListener("click", () => openPopup(popupMesto));
closeMestoPopup.addEventListener("click", () => closePopup(popupMesto));
closePopupImage.addEventListener("click", () => closePopup(popupImage));