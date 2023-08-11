const cardsContainer = document.querySelector(".cards-container");
const cards = Array.from(cardsContainer.querySelectorAll('.card'));

const slideBtnNext = document.querySelector(".slide-next");
const slideBtnPrevious = document.querySelector(".slide-previous");

slideBtnNext.addEventListener('click', () => {
    const cardWidth = cards[0].offsetWidth; // Get card width
    const scrollAmount = cardWidth + 20; // Adjust as needed
    cardsContainer.scrollBy(scrollAmount, 0);
    updateCardClass('next');
});

slideBtnPrevious.addEventListener('click', () => {
    const cardWidth = cards[0].offsetWidth; // Get card width
    const scrollAmount = cardWidth + 20; // Adjust as needed
    cardsContainer.scrollBy(-scrollAmount, 0);
    updateCardClass('prev');
});

function updateCardClass(direction) {
    const activeCard = cardsContainer.querySelector('.active-card');
    const cardIndex = cards.indexOf(activeCard);

    if (direction === 'next') {
        const newCardIndex = (cardIndex + 1) % cards.length;
        setActiveCard(newCardIndex);
    } else if (direction === 'prev') {
        const newCardIndex = (cardIndex - 1 + cards.length) % cards.length;
        setActiveCard(newCardIndex);
    }
}

function setActiveCard(index) {
    cards.forEach(card => card.classList.remove('active-card'));
    cards[index].classList.add('active-card');
}

cardsContainer.addEventListener('scroll', (event) => {
    event.preventDefault();
    // Handle scroll behavior if needed
});
