function deleteCardStorage(id) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    cards.splice(cards.indexOf((element) => element.id === id), 1);
    localStorage.setItem('cards', JSON.stringify(cards));
}

export default deleteCardStorage;