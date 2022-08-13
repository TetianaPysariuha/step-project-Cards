import Visit from './visit.js'
import postNewCards from '../functions/postCardFunc.js';

class VisitDentist extends Visit{
    constructor() {
        super();
        this.submitBtn = document.createElement('button');
    }

    createElements() {
        super.createElements();
        this.submitBtn.value = 'Создать визит';
        this.submitBtn.classList.add('btn_for_dentist');
        this.form.insertAdjacentHTML('beforeend', `<label for="visit-date">Дата последнего посещения</label>
        <input id="visit-date" type="date">`);
        this.submitBtn.addEventListener('click', (event) =>{
            event.preventDefault();
            this.postCard()});
        this.form.append(this.submitBtn);
    }

    postCard() {
        const urgencySelector = document.querySelector('.visit_select');
        postNewCards({doctor: 'dеntist',
                        name: document.querySelector('#name').value,
                        purpose: document.querySelector('#purpose').value,
                        description: document.querySelector('#description').value,
                        urgency: urgencySelector.options[urgencySelector.selectedIndex].text,
                        lastVisitDate: document.querySelector('#visit-date').value});

        document.querySelector('.modal').remove();
    }
}

export default VisitDentist;
