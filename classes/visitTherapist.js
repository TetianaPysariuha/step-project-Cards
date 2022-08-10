import Visit from './visit.js'
import postNewCards from '../functions/postCardFunc.js';

class VisitTherapist extends Visit{
    constructor() {
        super();
    }

    createElements() {
        super.createElements();
        this.form.insertAdjacentHTML('beforeend', `<label for="pressure">Обычное давление</label>
        <input id="pressure" type="text">
        <label for="mass-body-index">Индекс массы тела</label>
        <input id="mass-body-index" type="text">
        <label for="heart-diseases">Перенесенные заболевания сердечно-сосудистой системы</label>
        <textarea id="heart-diseases" rows="10"></textarea>
        <label for="age">Возраст</label>
        <input id="age" type="number">`);
        this.submitBtn.addEventListener('click', this.postCard.bind(this));
        this.form.append(this.submitBtn);
        this.form.append()
    }

    postCard() {
        debugger;
        const urgencySelector = document.querySelector('.visit_select');
        postNewCards({doctor:'Therapist',
                        name:document.querySelector('#name').value,
                        purpose:document.querySelector('#purpose').value,
                        description:document.querySelector('#description').value,
                        urgency: urgencySelector.options[urgencySelector.selectedIndex].text,
                        pressure:document.querySelector('#pressure').value,
                        massBodyIndex:document.querySelector("#mass-body-index").value,
                        heartDiseases:document.querySelector("#heart-diseases").value,
                        age:document.querySelector("#age").value});
    }
}

export default VisitTherapist;