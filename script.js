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

let cards = document.querySelector(".cards");

/* const cardsHeardsButton = cards.querySelectorAll(".cards__heards_button");

const cardsHeards = cards.querySelectorAll(".cards__heards"); */

popupName.value= profileTitle.textContent;
popupSpeciality.value = profileSubtitle.textContent;


const buttonAdd = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");
const popupСreate = document.querySelector(".popup-add__create");
const profileAddButton = document.querySelector(".profile__add-button");
let popupAddContainer = document.querySelector(".popup-add__container");
let overlayAdd = document.querySelector(".overlay-add");
const popupCloseButtonAdd = document.querySelector(".popup-add__close-button");
let popupContainerAdd = document.querySelector(".popup-add__container");
/* const cardsTrashButton = document.querySelectorAll(".cards__trash_button");
const cardsItem = document.querySelectorAll(".cards__item"); */


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

for (let i = 0; i < initialCards.length; i++) {
  //console.log(initialCards[i]);
  cards.innerHTML += `
  <li class="cards__item">
    <img class="cards__img" src="${initialCards[i].link}" alt="${initialCards[i].link}">
    <button class="cards__trash_button"><img class="cards__trash" src="./images/Trash.svg"></button>
    <div class="cards__info">
      <h3 class="cards__title">${initialCards[i].name}</h3>
      <button class="cards__heards_button hover-active"><img class="cards__heards hover-active" src="images/heart_logo.svg"></button>
    </div>
  </li>
  `;

  const cardsTrashButton = document.querySelectorAll(".cards__trash_button");
  const cardsItem = document.querySelectorAll(".cards__item");

  for (let j = 0; cardsItem > j; j++) {
    for (let i = 0; cardsTrashButton.length > i; i++) {
      cardsTrashButton.addEventListener("click", function() {
        cardsItem[j].remove();
      });
    }
  }
}

function formSubmitHandler2 (evt) {
  evt.preventDefault();

  popupСreate.addEventListener("click", function(evt) { 
    cards.innerHTML =  `
    <li class="cards__item">
      <img class="cards__img" src="${document.querySelector(".popup-add__link").value}" alt="${document.querySelector(".popup-add__link").value}">
      <button class="cards__trash_button"><img class="cards__trash" src="./images/Trash.svg"></button>
      <div class="cards__info">
        <h3 class="cards__title">${document.querySelector(".popup-add__name").value}</h3>
        <button class="cards__heards_button"><img class="cards__heards" src="images/heart_logo.svg"></button>
      </div>
    </li>
    ` + cards.innerHTML;

    cards.removeChild(cards.lastChild);

    const cardsHeardsButton = cards.querySelectorAll(".cards__heards_button");
    const cardsHeards = cards.querySelectorAll(".cards__heards");

    for (let i = 0; cardsHeardsButton.length > i; i++) {
      cardsHeardsButton[i].addEventListener("click", function() {
        cardsHeards[i].classList.toggle("cards__heards-black");
      });
    }
  });

  popupСreate.addEventListener("click", function() {
    popupAdd.classList.remove("popup-add_opened");
    popupAdd.classList.add("popup-add");
    /* overlayAdd.classList.remove("overlay-add"); */
  });
}



popupContainerAdd.addEventListener("click", formSubmitHandler2);

profileAddButton.addEventListener("click", function() {
  /* console.log("123"); */
  popupAdd.classList.add("popup-add_opened");
  popupAdd.classList.remove("popup-add");
  /* overlayAdd.classList.add("overlay-add"); */
});

popupCloseButtonAdd.addEventListener("click", function() {
  popupAdd.classList.remove("popup-add_opened");
  popupAdd.classList.add("popup-add");
});

const cardsHeardsButton = cards.querySelectorAll(".cards__heards_button");

const cardsHeards = cards.querySelectorAll(".cards__heards");

for (let i = 0; cardsHeardsButton.length > i; i++) {
  cardsHeardsButton[i].addEventListener("click", function() {
    cardsHeards[i].classList.toggle("cards__heards-black");
  });
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.


    popupName.textContent = profileTitle.value; 
    popupSpeciality.textContent = profileSubtitle.value;// Получите значение полей jobInput и nameInput из свойства value

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
    popupName.value= profileTitle.textContent;
    popupSpeciality.value = profileSubtitle.textContent;
});/* прячем окно при нажатии на крест, убираем класс popup_opened */

document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        popup.classList.remove("popup_opened");
        /* overlay.classList.remove("overlay"); */
    }
});

/*
for (let i = 0; cardsTrashButton.length > i; i++) {
  cardsTrashButton.addEventListener("click", function() {
    cardsTrashButton[i].parentElement.parentElement.remove();
  });
} */