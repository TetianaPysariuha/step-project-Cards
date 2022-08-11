function deleteCardStorage(id) {
    const cards = JSON.parse(localStorage.getItem('cards'));
    cards.splice(cards.indexOf((element) => element.id === id));
    localStorage.setItem('cards', JSON.stringify(cards));
}

export default deleteCardStorage;