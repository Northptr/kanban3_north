const pasteCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimlane = Math.floor(Math.random() * swimlanes.length);
    swimlanes[randomSwimlane].appendChild(card);
}

const createCard = (index, name) => {
    const cardElement = document.createElement('div');
    cardElement.className = `card card-${index}`;  
    cardElement.innerText = `${name}`;
    cardElement.draggable = 'true';

    cardElement.addEventListener('dragstart', (e) => {
        e.target.id = 'dragged';
    });

    cardElement.addEventListener('dragend', () => {
        e.target.id = 'undefined';
    })

    pasteCard(cardElement)
}

const createCards = (amount) => {
    const cardNames = ['Math', 'Sci', 'Social', 'Biology', 'Chemistry', 'Physics', 'English', 'Spain', 'Thai', 'Studio', 'PE', 'Good deeds'];
    for (let i = 0; i < amount; i++) {
        createCard(i, cardNames[i]);
    }
}

addEventListenerToSwimlanes = () => {
    const swimlanes = document.querySelectorAll('.swimlane');
    for (let i = 0; i < swimlanes.length; i++) {
        swimlanes[i].addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        swimlanes[i].addEventListener('drop', (e) => {
            e.preventDefault();

            const dragedCard = document.querySelector('#dragged');
            dragedCard.parentNode.removeChild(dragedCard);
            e.currentTarget.appendChild(dragedCard);
        });
    }
}

createCards(12);
addEventListenerToSwimlanes();