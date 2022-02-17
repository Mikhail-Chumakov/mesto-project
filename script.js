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

const cardsHeardsButton = cards.querySelectorAll(".cards__heards_button");

const cardsHeards = cards.querySelectorAll(".cards__heards");

popupName.value= profileTitle.textContent;
popupSpeciality.value = profileSubtitle.textContent;

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
    overlay.classList.add("overlay");
});

popupCloseButton.addEventListener("click", function() {
    popup.classList.remove("popup_opened");
    overlay.classList.remove("overlay");
    popupName.value= profileTitle.textContent;
    popupSpeciality.value = profileSubtitle.textContent;
});/* прячем окно при нажатии на крест, убираем класс popup_opened */

document.addEventListener("keydown", function(event){
    if (event.key === "Escape") {
        popup.classList.remove("popup_opened");
        overlay.classList.remove("overlay");
    }
});

/* cardsHeardsButton.addEventListener("click", function() {
  cardsHeards.classList.toggle("cards__heards-black");
}); */

/* for (let i = 0; cardsHeards.length > i; i++) {
  cardsHeards[i].addEventListener("click", function() {
    cardsHeards[i].classList.toggle("cards__heards-black");
  });
} */

for (let i = 0; cardsHeardsButton.length > i; i++) {
  cardsHeardsButton[i].addEventListener("click", function() {
    cardsHeards[i].classList.toggle("cards__heards-black");
  });
}