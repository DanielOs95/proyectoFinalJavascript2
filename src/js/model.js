 import { API_URL } from "./config.js";
 import { getJSON } from "./helpers.js";

 export const state = {

recipe: {}

};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);
       /* const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);*/

        const { recipe } = data.data;

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };

        console.log('recipe:', state.recipe);
    } catch (err) {
        console.error(`${err}💥💥💥💥`);
    }
};