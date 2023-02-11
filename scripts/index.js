const openPopup = item => {
    item.classList.add("popup_is-opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

const closePopup = item => {
    item.classList.remove("popup_is-opened");
};

const editProfile = event => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
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
editButton.addEventListener("click", () => openPopup(popup));
closeButton.addEventListener("click", () => closePopup(popup));
openMestoPopup.addEventListener("click", () => openPopup(popupMesto));
closeMestoPopup.addEventListener("click", () => closePopup(popupMesto));
closePopupImage.addEventListener("click", () => closePopup(popupImage));