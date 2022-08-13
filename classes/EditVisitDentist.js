import Visit from './visit.js';
import changeCardFuncApi from '../functions/changeCardFuncAPI.js'
import Modal from './modal.js';
/* import CardforDentist from './cardforDentist.js'; */

class EditVisitDentist extends Visit{
    constructor(cardObj) {
        super();
        this._cardObj = cardObj
        this._modalContainer = new Modal(); 
    }
    
    createElements(){
        super.createElements();
        this.form.insertAdjacentHTML('beforeend', `
        <label for="visit-date">Дата последнего посещения</label>
        <input id="visit-date" type="date">`);

        this.submitBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            this.edit()});
        this.submitBtn.value = 'Сохранить данные';
        this.submitBtn.className = 'form__submit-btn'

        this.form.append(this.submitBtn);
        this._modalContainer._mainContainer.append(this.form);
    }

    edit(){
        const urgencySelector = document.querySelector('.visit_select');
        this._cardObj._name = document.querySelector('#name').value;
        this._cardObj._purpose = document.querySelector('#purpose').value;
        this._cardObj._description = document.querySelector('#description').value;
        this._cardObj._urgency = urgencySelector.options[urgencySelector.selectedIndex].text;
        this._cardObj._dateVisited = document.querySelector('#visit-date').value;


        console.log(this._cardObj._dateVisited);
        changeCardFuncApi(this._cardObj._id, 
                        {id: this._cardObj._id,
                            name: this._cardObj._name,
                            doctor: 'dеntist',
                            purpose: this._cardObj._purpose,
                            description: this._cardObj._description,
                            urgency: this._cardObj._urgency,
                            lastVisitDate: this._cardObj._dateVisited});

/*         this._cardObj.deleteCards(); */
      
/*         new CardforDentist(this._cardObj._id, 
                            this._cardObj._name, 
                            'dеntist', 
                            this._cardObj._purpose, 
                            this._cardObj._description, 
                            this._cardObj._urgency,
                            this._cardObj._dateVisited).render('.container'); */
        this._modalContainer.closeModal();
    }

    render(){
        this.createElements();
        this._modalContainer.render('.container');
    }
}

export default EditVisitDentist;

  /* id,name,doctor,purpose,description,urgency,datevisited */