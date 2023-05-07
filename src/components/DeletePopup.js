import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onCardDelete(props.card);
  }
  return (
    <PopupWithForm
      name="delete_card"
      title="¿Estás seguro?"
      card={props.card}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      handleExternalClick={props.handleExternalClick}
    />
  );
}

export default DeletePopup;