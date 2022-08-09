const renderAfterReloadwithAddedCard =()=>{

    let newCardArr=  localStorage.getItem('newcard')
 
 console.log(newCardArr)
  let  newCardObj= JSON.parse(newCardArr)
     
 
 
     let cards = localStorage.getItem('cards')
 let cardsArr = JSON.parse(cards)
 
 let newCardsArr =cardsArr.push(newCardObj)
 console.log(cardsArr)
 
  }
 
 export default renderAfterReloadwithAddedCard