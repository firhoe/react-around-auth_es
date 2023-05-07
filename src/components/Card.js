import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn && 'card__delete-button_active'
  }`;

  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && 'card__like-button_on'
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onDeleteCard(props.card);
  }

  return (
    <>
      <li key={props.card._id} className="card">
        <button
          type="button"
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}></button>
        <img
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
          className="card__image"
        />
        <div className="card__information">
          <h2 className="card__title">{props.card.name}</h2>
          <div className="card__like-container">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}></button>
            <p className="card__like-counter">
              {props.card.likes ? props.card.likes.length : 0}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;