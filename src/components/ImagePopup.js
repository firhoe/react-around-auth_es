import React from "react";

function ImagePopup(props) {
    return (
      <section
        className={`popup popup_preview_image ${
          props.isOpen ? 'popup_opened' : ''
        }`}
        onClick={props.handleExternalClick}>
        <div className="popup__container popup__container_role-image">
          <figure className="popup__figure">
            <img src={props.card.link} alt="place" className="popup__image" />
            <figcaption className="popup__caption">
              {props.card.name}
            </figcaption>
          </figure>
          <button
            type="button"
            className="popup__close-button popup__preview-close-button"
            onClick={props.onClose}></button>
        </div>
      </section>
    );
}

export default ImagePopup;