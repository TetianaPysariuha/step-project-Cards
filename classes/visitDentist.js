import Visit from './visit.js'
import postNewCards from '../functions/postCardFunc.js';

class VisitDentist extends Visit{
    constructor() {
        super();
    }

    createElements() {
        super.createElements();
        this.form.insertAdjacentHTML('beforeend', `<label for="visit-date">Дата последнего посещения</label>
        <input id="visit-date" type="date">`);
        this.submitBtn.addEventListener('click', this.postCard.bind(this));
        this.form.append(this.submitBtn);
    }

    postCard() {
        const urgencySelector = document.querySelector('.visit_select');
        postNewCards({doctor: 'Dantist',
                        name: document.querySelector('#name').value,
                        purpose: document.querySelector('#purpose').value,
                        description: document.querySelector('#description').value,
                        urgency: urgencySelector.options[urgencySelector.selectedIndex].text,
                        lastVisitDate: document.querySelector('#visit-date').value});
        this.closeModal();
    }
}