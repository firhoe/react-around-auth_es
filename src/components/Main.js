import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__image"
                src={currentUser.avatar}
                alt="profile pic"
              />
              <div
                className="profile__avatar-overlay"
                onClick={props.onEditAvatar}></div>
            </div>
            <div className="profile__information">
              <div className="profile__wrap">
                <h1 className="profile__user">{currentUser.name}</h1>
                <button
                  type="button"
                  className="profile__edit-button"
                  onClick={props.onEditProfile}></button>
              </div>
              <p className="profile__profession">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            aria-label="add button"
            onClick={props.onAddPlace}></button>
        </section>

        <section className="cards">
          <ul className="cards__container">
            {props.cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onDeleteCard={props.onDeleteCard}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
