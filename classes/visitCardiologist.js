import Visit from "./visit.js";
import instance from "../functions/instance.js";
import Card from "./card.js";
import postNewCards from "../functions/postCardFunc.js";
import renderAfterReloadwithAddedCard from "../functions/renderCardsAfterAddNewCardAndReload.js";


class VisitCardiologist extends Visit{
constructor(){
    super()
this.submitBtn = document.createElement('button')
}
createElements(){
    super.createElements()
    this.submitBtn.innerHTML = 'Создать визит'
this.submitBtn.classList.add('btn_for_cardiologist')
   this.form.insertAdjacentHTML('beforeend',`
   <label for="pressure">Ваше обычное давление</label><br>
   <input id ="pressure" type ="text" value=""><br>
   <label for= "weight">Индекс массы тела</label><br>
   <input id ="weight" type ="text" value=""><br>
   <label for ="diseases">Перенесенные заболевания сердечно сосудистой системы</label><br>
   <input  id = "diseases" type ="text" value=""><br>
   <label for ="age">Возраст</label><br>
   <input id ="age"  type ="text" value=""><br>
   `)
this.form.append(this.submitBtn)
this.form.addEventListener('submit',(e)=>{
e.preventDefault()

const input = document.querySelectorAll('input')





   
  postNewCards({doctor:'cardiologist',name:document.querySelector('#name').value,age:document.querySelector('#age').value,pressure:document.querySelector('#pressure').value,weight:document.querySelector('#weight').value,purpose:document.querySelector('#purpose').value,description:document.querySelector('#description').value,urgency: document.querySelector('.visit_select').selectedIndex }) 
 
    
       
       
        
      })
  
}


render(selector){
    this.createElements()
    document.querySelector(selector).append(this.form);
}

}

export default VisitCardiologist;
