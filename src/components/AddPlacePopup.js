import React from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup(props) {

    const [errors, setErrors] = React.useState({}); 
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace(name, link);
    }

     React.useEffect(() => {
       setName('');
       setLink('');
     }, [props.isOpen]);

    return (
      <PopupWithForm
        name="add_card"
        title="Nuevo Lugar"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        errors={errors}
        setErrors={setErrors}
        handleExternalClick={props.handleExternalClick}>
        <>
          <label className="popup__field" htmlFor="popup-input-title">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="title"
              placeholder="Titulo"
              id="popup-input-title"
              className="popup__input"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__error popup__error_visible">
              {errors.title}
            </span>
          </label>
          <label className="popup__field" htmlFor="popup-input-link">
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              name="image-link"
              placeholder="Imagen URL"
              id="popup-input-link"
              className="popup__input"
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

export default AddPlacePopup;