import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._submit = this._submit.bind(this);
        this._button = this._popupForm.querySelector('.popup__save-button');
        this._startValue = this._button.textContent;
    }
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    _submit(evt) {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._submit);
    }

    close() {
        super.close();
        this._popupSelector.querySelector('.popup__container').reset();
    }
    saving(isLoad) {
        if (isLoad) {
            this._button.textContent = 'Сохранение...';
        }
        else {
            this._button.textContent = this._startValue;
        }
    }
}