import deleteCardStorage from './deleteCardStorage.js';

function handleResultDeleteCard(cardObj) {
    console.log(cardObj);
    deleteCardStorage(cardObj._id);
    cardObj.deleteCards();
}

export default handleResultDeleteCard;