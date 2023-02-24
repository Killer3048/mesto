const openPopup = (item) => item.classList.add("popup_is-opened");
const closePopup = (item) => {
    const popupForm = item.querySelector('.popup__form');
    resetErrors(popupForm, validationSettings);
    item.classList.remove("popup_is-opened");
};

const editProfile = (event) => {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
};

const createCard = (item) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector(".card__image");
    const like = card.querySelector(".card__like");
    const trash = card.querySelector(".card__trash");
    image.src = item.link;
    image.alt = item.name;

    card.querySelector(".card__title").textContent = item.name;
    like.addEventListener("click", () =>
        like.classList.toggle("card__like_active")
    );

    trash.addEventListener("click", () => card.remove());

    image.addEventListener("click", () => {
        const popupImageImg = popupImage.querySelector(".popup__image");
        const popupImageTitle = popupImage.querySelector(".popup__image-title");
        openPopup(popupImage);
        popupImageImg.src = item.link;
        popupImageImg.alt = item.name;
        popupImageTitle.textContent = item.name;
    });

    return card;
};

const renderCards = () => cardElements.prepend(...initialCards.map(createCard));
renderCards();

formElementMesto.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameImageInput.value;
    const link = linkImageInput.value;
    const card = createCard({
        name,
        link
    });
    cardElements.appendChild(card);
    closePopup(popupMesto);
});

formProfile.addEventListener("submit", editProfile);

editButton.addEventListener("click", () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile);
});

function resetErrors() {
    const errors = document.querySelectorAll('.error');
    if (errors) {
      errors.forEach(error => {
        error.classList.remove('error');
      });
    }
  }
  

const closePopupOnEsc = (event) => {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}

popups.forEach(function(popup) {
    popup.addEventListener('click', function(event) {
      if (event.target === popup) {
        resetErrors(popup.querySelector(validationSettings.formSelector));
        closePopup(popup);
      }  
    });
  });

popupImage.addEventListener('click', (event) => {
    if (event.target === popupImage) {
      closePopup(popupImage);
    }
  });

closeButton.addEventListener("click", () => closePopup(popupProfile));
openMestoPopup.addEventListener("click", () => openPopup(popupMesto));
closeMestoPopup.addEventListener("click", () => closePopup(popupMesto));
closePopupImage.addEventListener("click", () => closePopup(popupImage));
document.addEventListener('keydown', closePopupOnEsc);