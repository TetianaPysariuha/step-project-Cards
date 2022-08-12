import Card from "../classes/card.js"
import instance from "./instance.js"
import renderAfterReloadwithAddedCard from "./renderCardsAfterAddNewCardAndReload.js"
import renderCardForDifferentDoctors from "./renderForDifferentDoctors.js"


const postNewCards = async (obj) => {

  try {
    const { status, data } = await instance.post('', obj)
    if (status === 200) {
      console.log(data)

      renderCardForDifferentDoctors(data)

      localStorage.setItem('newcard', JSON.stringify(data))

      renderAfterReloadwithAddedCard()
    }
  } catch (err) { console.log(err) }

}

export default postNewCards