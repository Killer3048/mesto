const openPopup = (item) => {
  item.classList.add("popup_is-opened");
};

const closePopup = (item) => {
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
  const [image, like, trash] = [
    card.querySelector(".card__image"),
    card.querySelector(".card__like"),
    card.querySelector(".card__trash")
  ];

  [image.src, image.alt] = [item.link, item.name];
  card.querySelector(".card__title").textContent = item.name;
  like.addEventListener("click", () =>
    like.classList.toggle("card__like_active")
  );

  trash.addEventListener("click", () => card.remove());
  image.addEventListener("click", () => {
    const [popupImageImg, popupImageTitle] = [
      popupImage.querySelector(".popup__image"),
      popupImage.querySelector(".popup__image-title")
    ];
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
  const card = createCard({ name, link });
  cardElements.appendChild(card);
  closePopup(popupMesto);
});

form.addEventListener("submit", editProfile);
editButton.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
});
closeButton.addEventListener("click", () => closePopup(popupProfile));
openMestoPopup.addEventListener("click", () => openPopup(popupMesto));
closeMestoPopup.addEventListener("click", () => closePopup(popupMesto));
closePopupImage.addEventListener("click", () => closePopup(popupImage));
