const cardsBox = document.querySelector('.js__form-card-box');
const cardsBoxVisible = document.querySelector('.js__form-cards-visible');
const cardsBoxHidden = document.querySelector('.js__form-cards-hidden');

const CARDS = [
    { 
        cardName: 'visa',
        cardImgUrl: './img/visa.png',
        cardIsActive: true,
    },
    { 
        cardName: 'mastercard',
        cardImgUrl: './img/mastercard.png',
        cardIsActive: false,
    },
    { 
        cardName: 'discover',
        cardImgUrl: './img/discover.png',
        cardIsActive: false,
    },
]

cardsBoxVisible.innerHTML = `
  <div class="form__payment-card-text-box" id="${CARDS[0].cardName}">
    <p class="text">${CARDS[0].cardName}</p>
    <img src="${CARDS[0].cardImgUrl}" alt="icon" class="form__payment-card-icon">
  </div>
`;

CARDS.forEach(card => {
    if(!card.cardIsActive) {
   cardsBoxHidden.insertAdjacentHTML('beforeend', `
  <div class="form__payment-card-text-box" id="${card.cardName}">
    <p class="text">${card.cardName}</p>
    <img src="${card.cardImgUrl}" alt="icon" class="form__payment-card-icon">
  </div>
`);
    }
})


cardsBoxVisible.addEventListener('click', toggleHiddenCards);
cardsBoxHidden.addEventListener('click', setActiveCard);

function toggleHiddenCards () {
    cardsBox.classList.toggle('active-box');
}

function setActiveCard(e) {
  const arr = [];
  
  CARDS.forEach(card => {
    
    if(e.target.getAttribute('id') === card.cardName) {

    cardsBoxVisible.innerHTML = `
  <div class="form__payment-card-text-box" id="${card.cardName}">
    <p class="text">${card.cardName}</p>
    <img src="${card.cardImgUrl}" alt="icon" class="form__payment-card-icon">
  </div>
   `;

    } else {

    arr.push(`
    <div class="form__payment-card-text-box" id="${card.cardName}">
      <p class="text">${card.cardName}</p>
      <img src="${card.cardImgUrl}" alt="icon" class="form__payment-card-icon">
    </div>
  `);
    }
  })

   cardsBoxHidden.innerHTML = arr.join('');

}