import Card from "../classes/card.js"
import instance from "./instance.js"
import renderAfterReloadwithAddedCard from "./renderCardsAfterAddNewCardAndReload.js"
import renderCardForDifferentDoctors from "./renderForDifferentDoctors.js"


const postNewCards = async (obj) => {


  const { status, data } = await instance.post('', obj)
  console.log(data)

  renderCardForDifferentDoctors(data)

  localStorage.setItem('newcard', JSON.stringify(data))

  renderAfterReloadwithAddedCard()

}

export default postNewCards