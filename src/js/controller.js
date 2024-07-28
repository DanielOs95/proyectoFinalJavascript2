import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import SearchView from './views/searchViews.js';
import ResultsView from './views/ResultView.js'; 
import icons from 'url:../img/icons.svg'; 

//const recipeContainer = document.querySelector('.recipe');

/*const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};*/

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

/*const renderSpinner = function(parentE1) {
  const markup = `
  <div class="spinner">
  <svg>
  <use href="${icons}#icon-loader"></use>
  </svg>
  </div>
  `;
  parentE1.innerHTML = '';
  parentE1.insertAdjacentHTML('afterbegin', markup);
};*/


const controlRecipes = async function () {
  try {
    
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();

    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
    
  } catch (err) {
    RecipeView.renderError(err.message);
  }
};


const controlSearchResults = async function () {
  try {
    const query = SearchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    ResultsView.render(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
};

init();

