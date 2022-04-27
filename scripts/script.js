// consts
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAddOpened = document.querySelector(".popup-add_opened");
const popupContainer = document.querySelector(".popup__container");
const popupName = document.querySelector(".popup__name");
const popupSpeciality = document.querySelector(".popup__speciality");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupCloseButton = popup.querySelector(".popup__close-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupSave = document.querySelector(".popup__save");
const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupСreate = document.querySelector(".popup-add__create");
const profileAddButton = document.querySelector(".profile__add-button");
const popupAddContainer = document.querySelector(".popup-add__container");
const overlayAdd = document.querySelector(".overlay-add");
const popupCloseButtonAdd = document.querySelector(".popup-add__close-button");
const popupContainerAdd = document.querySelector(".popup-add__container");
const cards = document.querySelector(".cards");
const popupImg = document.querySelector(".popup-img");
const popupImgFullSize = document.querySelector(".popup-img__full-size");
const popupImgTitle = document.querySelector(".popup-img__title");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupAddFormAdd = document.querySelector(".popup-add__form-add");
const cardsTemplate = document.querySelector(".cards-template");
const cardsItem = document.querySelectorAll(".cards__item");

popupName.value= profileTitle.textContent;
popupSpeciality.value = profileSubtitle.textContent;

//addEventListeners

profileEditButton.addEventListener("click", function() {
  popupOpen(popupEdit);
});

popupSave.addEventListener("click", function() {
  profileTitle.textContent = popupName.value;
  profileSubtitle.textContent = popupSpeciality.value;
  popupClose(popupEdit);
});


popupCloseButton.addEventListener("click", function() {
  popupName.value = profileTitle.textContent;
  popupSpeciality.value = profileSubtitle.textContent;
  popupClose(popupEdit);
});

popupContainer.addEventListener("click", formSubmitHandler);

popupCloseButtonAdd.addEventListener("click", function() {
  popupClose(popupAdd);
});

profileAddButton.addEventListener("click", function() {
  popupOpen(popupAdd);
});

popupAddFormAdd.addEventListener("submit", addCard);

initialCards.forEach(function(el){
  cards.prepend(createCards(el));
  heards();
});

/* initialCards.map(renderCards); */



// functions

//открываем попап
function popupOpen(popup) {
  popup.classList.add("popup_opened");
}

//закрываем попап
function popupClose(popup) {
  popup.classList.remove("popup_opened");
}

// удаление карточек
function deleteCard(event) {
  const card = event.currentTarget.closest(".cards__item");

  card.remove();
}

function heards (){
  const cardsHeardsButton = cards.querySelectorAll(".cards__heards_button");

  const cardsHeards = cards.querySelectorAll(".cards__heards");

  for (let i = 0; cardsHeardsButton.length > i; i++) {
    cardsHeardsButton[i].addEventListener("click", function() {
      cardsHeards[i].classList.toggle("cards__heards-black");
    });
  }
}

function createCards(obj) {
  const newCard = cardsTemplate.content.cloneNode(true);

  newCard.querySelector(".cards__title").textContent = obj.name;

  newCard.querySelector(".cards__img").src = obj.link;

  setListenerCards(newCard);
  heards();
  return newCard;
}

function addCard(event) {
  event.preventDefault();

  const newCardTitle = event.currentTarget.querySelector(".popup-add__name").value;

  const newCardLink = event.currentTarget.querySelector(".popup-add__link").value;



  cards.prepend(createCards({name: newCardTitle, link: newCardLink})); 
  
  event.currentTarget.reset();
  
  heards();
  popupAddClose();
}

function formSubmitHandler (event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.


  popupName.textContent = profileTitle.value; 
  popupSpeciality.textContent = profileSubtitle.value; // Получите значение полей jobInput и nameInput из свойства value
}

// popup imgFullSize
function imgFullSize(event){
  const srcImg = event.currentTarget.src;
  const title = event.currentTarget.parentElement.querySelector(".cards__title").textContent;
  console.log(title);
  
  popupImgFullSize.src = srcImg;
  popupImgTitle.textContent = title;
  
  popupOpen(popupImg);
}

document.querySelectorAll(".cards__img").forEach(function (el) {
  el.addEventListener("click", imgFullSize);
});

// addEventListeners клавиатура (задел)

/*   document.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
      profileTitle.textContent = popupName.value;
      profileSubtitle.textContent = popupSpeciality.value;
      popupClose(popupEdit);
    }
  }); */

/* document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
      popupClose(popupEdit);
    }
}); */

/* document.addEventListener("keydown", function(event){
  if (event.key === "Escape") {
    popupAddClose();
  }
}); */

//*****************************************************************





function setListenerCards (card){
  card.querySelector(".cards__trash_button").addEventListener("click", deleteCard);
  /* card.querySelector(".cards__heards_button").addEventListener("click", heards); */
  card.querySelector(".cards__img").addEventListener("click", imgFullSize);
}

/* function popupAddClose () {
  popupAdd.classList.remove("popup_opened");
  popupAdd.classList.add("popup-add");
} */

