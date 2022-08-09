import Card from "../classes/card.js"
import instance from "./instance.js"


const postNewCards = async (obj) =>{
   
  
    const {status,data} =  await instance.post('',obj)
       console.log(data)
      const newCard = new Card(data.id,data.name,data.doctor,data.purpose,data.description,data.urgency)
      newCard.render('.container')
      localStorage.setItem('newcard',JSON.stringify(data))

   }

   export default postNewCards