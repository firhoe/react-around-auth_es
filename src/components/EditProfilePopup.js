import React from 'react';
import PopupWithForm from './PopupWithForm';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [errors, setErrors] = React.useState({}); 
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName('');
    setDescription('');
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      name="edit_profile"
      title="Editar Perfil"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      errors={errors}
      setErrors={setErrors}
      handleExternalClick={props.handleExternalClick}>
      <>
        <label className="popup__field" htmlFor="popup-input-name">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            id="popup-input-name"
            className="popup__input popup__input_type_name"
            minLength="2"
            maxLength="40"
            value={name}
            onChange={handleNameChange}
            required
          />
          <span className="popup__error popup__error_visible">
            {errors.name}
          </span>
        </label>
        <label className="popup__field" htmlFor="popup-input-about">
          <input
            type="text"
            name="about"
            placeholder="Ocupación"
            id="popup-input-about"
            className="popup__input popup__input_type_about"
            minLength="2"
            maxLength="200"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
          <span className="popup__error popup__error_visible">
            {errors.about}
          </span>
        </label>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;