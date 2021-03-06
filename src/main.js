"use strict";
const CARDS_COUNT = 5;
const EXTRA_CARDS_COUNT = 2;
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);

};


const createProfileRate = () => {
  return (`<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`);
};

const createMainMenu = () => {
  return (`<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a> <a href="#watchlist"
      class="main-navigation__item">Watchlist
      <span class="main-navigation__item-count">13</span></a> <a href="#history"
      class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a> <a
      href="#favorites" class="main-navigation__item">Favorites <span
        class="main-navigation__item-count">8</span></a> </div> <a href="#stats"
    class="main-navigation__additional">Stats</a>
</nav>`
  );
};

const createSort = () => {
  return (`<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`
  );
};


const createFilms = () => {
  return (`<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container"> </div> <button class="films-list__show-more">Show more</button>
  </section>
  <section class="films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
  </section>
  <section class="films-list--extra">
    <h2 class="films-list__title">Most commented</h2>
  </section>
</section>`
  );
};

const createCardTemplate = () => {
  return (`<article class="film-card">
  <h3 class="film-card__title">The Dance of Life</h3>
  <p class="film-card__rating">8.3</p>
  <p class="film-card__info"> <span class="film-card__year">1929</span> <span class="film-card__duration">1h
      55m</span> <span class="film-card__genre">Musical</span> </p> <img
    src="./images/posters/the-dance-of-life.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee
    King (Carroll), end up together on a cold, rainy night at a trвЂ¦</p> <a class="film-card__comments">5
    comments</a>
  <form class="film-card__controls"> <button
      class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as
      watched</button> <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as
      favorite</button> </form>
</article>`
  );
};


const createMoviesInside = () => {

  return (`<section class="footer__statistics"> <p>130 291 movies inside</p> </section>`
  );
};
const createFilmCardsContainer = () => {
  return (`<div class="films-list__container">
      </div>`
  );
};

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);
const footerContainer = document.querySelector(`.footer`);

render(headerContainer, createProfileRate(), `beforeend`);
render(mainContainer, createMainMenu(), `beforeend`);
render(mainContainer, createSort(), `beforeend`);
render(mainContainer, createFilms(), `beforeend`);
render(footerContainer, createMoviesInside(), `beforeend`);


const filmsContainer = document.querySelector(`.films-list__container`);

for (let i = 0; i < CARDS_COUNT; i++) {
  render(filmsContainer, createCardTemplate());
}

const extraFilmsList = mainContainer.querySelectorAll(`.films-list--extra`);
const [ratedFilmsList, commentedFilmsList] = extraFilmsList;

render(ratedFilmsList, createFilmCardsContainer());
render(commentedFilmsList, createFilmCardsContainer());

const ratedFilmsListContainer = ratedFilmsList.querySelector(`.films-list__container`);
const commentedFilmsListContainer = commentedFilmsList.querySelector(`.films-list__container`);

for (let i = 0; i < EXTRA_CARDS_COUNT; i++) {

  render(ratedFilmsListContainer, createCardTemplate());
  render(commentedFilmsListContainer, createCardTemplate());
}

