const renderAfterReloadwithAddedCard = () => {

    let newCardArr = localStorage.getItem('newcard')

    console.log(newCardArr)
    let newCardObj = JSON.parse(newCardArr)

    console.log(newCardObj)

    let cards = localStorage.getItem('cards')
    let cardsArr = JSON.parse(cards)

    let newCardsArr = cardsArr.push(newCardObj)

    console.log(cardsArr)
    const newCardsArrJSon = JSON.stringify(cardsArr)

    localStorage.setItem('cards', newCardsArrJSon)
 const emptyTitle = document.querySelector('h1')
if(emptyTitle){emptyTitle.remove()}
}

export default renderAfterReloadwithAddedCard
