// consts
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAddOpened = document.querySelector(".popup-add_opened");
const popupContainer = document.querySelector(".popup__container");
const popupName = document.querySelector(".popup__name");
const popupSpeciality = document.querySelector(".popup__speciality");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const closePopupButton = popup.querySelector(".popup__close-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupSave = document.querySelector(".popup__save");
const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupСreate = document.querySelector(".popup-add__create");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddContainer = document.querySelector(".popup-add__container");
const overlayAdd = document.querySelector(".overlay-add");
const closePopupButtonAdd = document.querySelector(".popup-add__close-button");
const popupContainerAdd = document.querySelector(".popup-add__container");
const cards = document.querySelector(".cards");
const popupImg = document.querySelector(".popup-img");
const popupImgFullSize = document.querySelector(".popup-img__full-size");
const popupImgTitle = document.querySelector(".popup-img__title");
const popupImgCloseButton = document.querySelector(".popup-img__close-button");
const popupForm = document.querySelector(".popup__form");
const popupAddName = document.querySelector(".popup-add__name");
const popupAddLink = document.querySelector(".popup-add__link");
const popupAddFormAdd = document.querySelector(".popup-add__form-add");
const cardsTemplate = document.querySelector(".cards-template");
const cardsItem = document.querySelectorAll(".cards__item");

//addEventListeners
profileEditButton.addEventListener("click", function() {
  popupName.value= profileTitle.textContent;
  popupSpeciality.value = profileSubtitle.textContent;
  openPopup(popupEdit);
});

popupForm.addEventListener("submit", function() {
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupSpeciality.value;
  closePopup(popupEdit);
});

closePopupButton.addEventListener("click", function() {
  closePopup(popupEdit);
});

popupForm.addEventListener("submit", handleProfileFormSubmit);

profileAddButton.addEventListener("click", function() {
  openPopup(popupAdd);
});

closePopupButtonAdd.addEventListener("click", function() {
  closePopup(popupAdd);
});

popupImgCloseButton.addEventListener("click", function() {
  closePopup(popupImg);
});

popupAddFormAdd.addEventListener("submit", addCard);

// functions
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//закрываем попап
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// удаление карточек
function deleteCard(event) {
  const card = event.currentTarget.closest(".cards__item");

  card.remove();
}

// like
function heards(event){
  event.currentTarget.querySelector(".cards__heards").classList.toggle("cards__heards-black");
}

function createCards(obj) {
  const newCard = cardsTemplate.content.cloneNode(true);

  newCard.querySelector(".cards__title").textContent = obj.name;
  newCard.querySelector(".cards__img").src = obj.link;
  newCard.querySelector(".cards__img").alt = obj.name;

  newCard.querySelector(".cards__heards_button").addEventListener("click", heards);

  newCard.querySelector(".cards__trash_button").addEventListener("click", deleteCard);

  newCard.querySelector(".cards__img").addEventListener("click", imgFullSize);

  return newCard;
}

function addCard(event) {
  event.preventDefault();

  const newCardTitle = popupAddName.value;

  const newCardLink = popupAddLink.value;

  cards.prepend(createCards({name: newCardTitle, link: newCardLink})); 

  event.currentTarget.reset();
  
  closePopup(popupAdd);
}

function renderCards () {
  initialCards.forEach(function(el){
    cards.prepend(createCards(el));
  });
}
renderCards();

function handleProfileFormSubmit (event) {
  event.preventDefault();

  popupName.textContent = profileTitle.value; 
  popupSpeciality.textContent = profileSubtitle.value;
}

function imgFullSize(event){
  const srcImg = event.currentTarget.src;
  const title = event.currentTarget.parentElement.querySelector(".cards__title").textContent;
  
  popupImgFullSize.src = srcImg;
  popupImgFullSize.alt = title;
  popupImgTitle.textContent = title;

  openPopup(popupImg);
}

