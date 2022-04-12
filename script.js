// Находим форму в DOM
let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popup__container");// Воспользуйтесь методом querySelector()

// Находим поля формы в DOM

let popupName = document.querySelector(".popup__name");// Воспользуйтесь инструментом .querySelector()
let popupSpeciality = document.querySelector(".popup__speciality");// Воспользуйтесь инструментом .querySelector()
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
const popupCloseButton = popup.querySelector(".popup__close-button");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupSave = document.querySelector(".popup__save");
/* let cards = document.querySelector(".cards"); */

popupName.value= profileTitle.textContent;
popupSpeciality.value = profileSubtitle.textContent;

// cards + popup add cards

const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupСreate = document.querySelector(".popup-add__create");
const profileAddButton = document.querySelector(".profile__add-button");
let popupAddContainer = document.querySelector(".popup-add__container");
let overlayAdd = document.querySelector(".overlay-add");
const popupCloseButtonAdd = document.querySelector(".popup-add__close-button");
let popupContainerAdd = document.querySelector(".popup-add__container");
const cards = document.querySelector(".cards");

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
/* const cardsItem = document.querySelector(".cards__item"); */

popupAddFormAdd.addEventListener("submit", addCard);

function renderCards(obj) {
  const newCard = cardsTemplate.content.cloneNode(true);

  newCard.querySelector(".cards__title").textContent = obj.name;

  newCard.querySelector(".cards__img").src = obj.link;
  
  setListenerCards(newCard);
  
  cards.append(newCard);

};

function addCard(event) {
  event.preventDefault();

  const newCardTitle = event.currentTarget.querySelector(".popup-add__name").value;
  /* console.log(newCardTitle); */
  const newCardLink = event.currentTarget.querySelector(".popup-add__link").value;

  renderCards({name: newCardTitle, link: newCardLink});

  event.currentTarget.reset();
  heards();
  popupAddClose();
}

// удаление карточек
function deleteCard(event) {
  const card = event.currentTarget.closest(".cards__item");

  card.remove();
}

function setListenerCards (card){
  card.querySelector(".cards__trash_button").addEventListener("click", deleteCard);
}

initialCards.map(renderCards);

function popupAddClose () {
  popupAdd.classList.remove("popup-add_opened");
  popupAdd.classList.add("popup-add");
}

document.addEventListener("keydown", function(event){
  if (event.key === "Escape") {
    popupAddClose();
  }
});

profileAddButton.addEventListener("click", function() {
  popupAdd.classList.add("popup-add_opened");
  popupAdd.classList.remove("popup-add");
});

popupCloseButtonAdd.addEventListener("click", function() {
  popupAddClose();
});

function heards (){
  const cardsHeardsButton = cards.querySelectorAll(".cards__heards_button");

  const cardsHeards = cards.querySelectorAll(".cards__heards");

  for (let i = 0; cardsHeardsButton.length > i; i++) {
    cardsHeardsButton[i].addEventListener("click", function() {
      cardsHeards[i].classList.toggle("cards__heards-black");
    });
  }
}
heards();

// popup name & speciality

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler (event) {
  event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.


  popupName.textContent = profileTitle.value; 
  popupSpeciality.textContent = profileSubtitle.value; // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
  popupSave.addEventListener("click", function() {
    profileTitle.textContent = popupName.value;
    profileSubtitle.textContent = popupSpeciality.value;
    popup.classList.remove("popup_opened");
    overlay.classList.remove("overlay");
  });

  document.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
      profileTitle.textContent = popupName.value;
      profileSubtitle.textContent = popupSpeciality.value;
      popup.classList.remove("popup_opened");
      overlay.classList.remove("overlay");
    }
  });
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

popupContainer.addEventListener("click", formSubmitHandler);

profileEditButton.addEventListener("click", function() {
    popup.classList.add("popup_opened");
    /* overlay.classList.add("overlay"); */
});

popupCloseButton.addEventListener("click", function() {
    popup.classList.remove("popup_opened");
    /* overlay.classList.remove("overlay"); */
    popupName.value = profileTitle.textContent;
    popupSpeciality.value = profileSubtitle.textContent;
});/* прячем окно при нажатии на крест, убираем класс popup_opened */

document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        popup.classList.remove("popup_opened");
        /* overlay.classList.remove("overlay"); */
    }
});

// popup full size img

const popupImg = document.querySelector(".popup-img");
const cardsImg = document.querySelectorAll(".cards__img");
const cardsTitle = document.querySelectorAll(".cards__title"); // написать цикл для названий, что бы обращаться к popup-img__title
const popupImgFullSize = document.querySelector(".popup-img__full-size");
const popupImgTitle = document.querySelector(".popup-img__title");

/* cardsImg.currentTarget.addEventListener("click", imgFullSize); */
for (let i = 0; cardsImg.length > i; i++){ 
  for(let j = 0; cardsTitle.length > j; j++) {
    cardsImg[i].addEventListener("click", function() {
    popupImg.classList.add("popup-img_opened");
    popupImg.classList.remove("popup-img");

    popupImgFullSize.src = cardsImg[i].src; 
    popupImgTitle.textContent = cardsTitle[i].textContent;

    document.addEventListener("keydown", function(event){
      if (event.key === "Escape") {
        popupImg.classList.remove("popup-img_opened");
        popupImg.classList.add("popup-img");
      }
    });
  });}

}
/* function imgFullSize (event){
  cardsImg.currentTarget.addEventListener("click", function() {
    popupImg.classList.add("popup-img_opened");
    popupImg.classList.remove("popup-img");

    popupImgFullSize.src = cardsImg.link;
    popupImgTitle.textContent = cardsImg.name;
  });
} */
/* for (let i = 0; cardsImg.length > i; i++){ 
  cardsImg[i].addEventListener("click", function() {
    popupImg.classList.add("popup-img_opened");
    popupImg.classList.remove("popup-img");

    popupImg.innerHTML = `
      <button class="popup-img__close-button hover-active" type="button"><img class="popup__close-icon" src="images/Close_Icon.svg"alt="закрыть">
      </button>
      <img class="popup-img__full-size" src="${cardsImg[i].src}">
      <p class="popup-img__title">${document.querySelector(".popup-add__name").value}</p>
      `;
  }); 
  
  document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
      popupImg.classList.remove("popup-img_opened");
      popupImg.classList.add("popup-img");
    }
  });
}*/