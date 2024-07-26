import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import RecipeViews from './views/RecipeView.js';
//import { state } from './model.js';
import icons from 'url:../img/icons.svg';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function(parentE1) {
  const markup = `
  <div class="spinner">
  <svg>
  <use href="${icons}#icon-loader"></use>
  </svg>
  </div>
  `;
  parentE1.innerHTML = '';
  parentE1.insertAdjacentHTML('afterbegin', markup);
};


const controlRecipes = async function () {
  try {
    //renderSpinner(recipeContainer);

    const id = window.location.hash.slice(1);
    //console.log(id)

    if (!id) return;
    RecipeView.renderSpinner();

    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);

   /* const resp = await fetch(' https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');

    const data = await resp.json();

    console.log('resp:', resp);
    console.log('data:', data);


    let recipe = data.data.recipe;

    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };

    console.log('recipe:', recipe);

    const markup = `
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="src/img/icons.svg#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
          <span class="recipe__info-text">servings</span>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="src/img/icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(ing => `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity ? ing.quantity : ''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${recipe.sourceUrl}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    
    recipeContainer.innerHTML = '';

    recipeContainer.insertAdjacentHTML('afterbegin', markup);*/

   
    
  } catch (err) {
    console.error(err);
  }
}


['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
//showRecipe();

//window.addEventListener('hashchange', showRecipe);
//window.addEventListener('load', showRecipe);