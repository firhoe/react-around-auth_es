import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    
    const imageRef = React.useRef();
    const [errors, setErrors] = React.useState({}); 

    function handleSubmit(e) {
      e.preventDefault();
      props.onUpdateAvatar({
        avatar: imageRef.current.value,
      });
      e.target.reset();
    }

    return (
      <PopupWithForm
        name="image_profile"
        title="Cambiar foto de Perfil"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        handleExternalClick={props.handleExternalClick}>
        <>
          <label className="popup__field" htmlFor="popup-input-image">
            <input
              type="url"
              name="image-link"
              placeholder="Imagen URL"
              id="popup-input-image"
              className="popup__input"
              ref={imageRef}
              required
            />
            <span className="popup__error popup__error_visible">
              {errors['image-link']}
            </span>
          </label>
        </>
      </PopupWithForm>
    );
}

export default EditAvatarPopup;