const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_inactive',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__form-error'
};

const checkValidity = (formElem, inputElem, lists) => {
    if (!inputElem.validity.valid || inputElem.value.length < 2) {
        let errorMsg;
        if (inputElem.value.length < 2) {
            errorMsg = 'Введите минимум 2 символа';
        } else {
            errorMsg = inputElem.validationMessage;
        }
        showError(formElem, inputElem, errorMsg, lists);
    } else {
        hideError(formElem, inputElem, lists);
    }
};

const showError = (formElem, inputElem, errorMsg, lists) => {
    const errorElem = formElem.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.add(lists.inputErrorClass);
    errorElem.textContent = errorMsg;
    errorElem.classList.add(lists.errorClass);
};
const hideError = (formElem, inputElem, lists) => {
    const errorElem = formElem.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.remove(lists.inputErrorClass);
    errorElem.textContent = '';
    errorElem.classList.remove(lists.errorClass);
};

const setListeners = (formElem, lists) => {
    const inputList = Array.from(formElem.querySelectorAll(lists.inputSelector));
    const buttonElem = formElem.querySelector(lists.submitButtonSelector);
    toggleButton(inputList, buttonElem, lists);
    inputList.forEach((inputElem) => {
        inputElem.addEventListener('input', () => {
            checkValidity(formElem, inputElem, lists);
            toggleButton(inputList, buttonElem, lists);
        });
    });
    formElem.addEventListener('reset', () => {
        toggleButton(inputList, buttonElem, lists);
    });
};
const enableValidation = (lists) => {
    const formList = Array.from(document.querySelectorAll(lists.formSelector));
    formList.forEach((formElem) => {
        setListeners(formElem, lists);
    });
};
const checkInvalidInput = (inputList) => {
    return inputList.some((inputElem) => {
        return !inputElem.validity.valid;
    });
};

const toggleButton = (inputList, buttonElem, lists) => {
    const isAnyInvalid = inputList.some((input) => !input.validity.valid);
    const isBothFilled = inputList.every((input) => input.value !== '');

    if (isAnyInvalid || !isBothFilled) {
        buttonElem.classList.add(lists.inactiveButtonClass);
        buttonElem.disabled = true;
    } else {
        buttonElem.classList.remove(lists.inactiveButtonClass);
        buttonElem.disabled = false;
    }
};

enableValidation(validationSettings);