import React from 'react';
import { useRef } from 'react';

function PopupWithForm(props) {
  const formRef = useRef(null);

  const handleInput = (event) => {
    const input = event.target;
    const errors = {...props.errors};

    if (!input.form) {
      return;
    }
    if (!input.validity.valid) {
      errors[input.name] = input.validationMessage;
    } else {
      errors[input.name] = '';
    }
    props.setErrors(errors);
  };

  const isInvalid = () => {
    if (!formRef.current) return false;
    const formInputs = formRef.current.elements;
    return Array.from(formInputs).some(input => {
      return input.validity.valid === false;
    })
  }

  return (
    <section
      className={`popup popup_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`} onClick={props.handleExternalClick}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          className={`popup_form popupform_type${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
          onInput={handleInput}
          ref={formRef}
          noValidate>
          {props.children}
          <button
            type="submit"
            className={`popup__button popup__button_type_${props.name} 
            ${
              isInvalid() ? 'popup__button_disabled' : ''
            }`}
            disabled={isInvalid()}>
            {props.name === 'delete_card' ? 'Si' : 'Guardar'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;