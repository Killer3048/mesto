const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-btn',
    inactiveButtonClass: 'popup__form-btn_inactive',
    inputErrorClass: 'popup__form-input_type_error',
    errorClass: 'popup__form-error'
};

const checkValidity = (formElem, inputElem, lists) => {
    if (!inputElem.validity.valid) {
        showError(formElem, inputElem, inputElem.validationMessage, lists);
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
    if (checkInvalidInput(inputList)) {
        buttonElem.setAttribute('disabled', true);
        buttonElem.classList.add(lists.inactiveButtonClass);
    } else {
        buttonElem.removeAttribute('disabled');
        buttonElem.classList.remove(lists.inactiveButtonClass);
    }
};

enableValidation(validationSettings);