const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeList = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = "recipe image";

    recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;

    recipeIngredients = document.createElement("p");
    recipeIngredients.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
          .map((ingredient) => ingredient.original)
          .join(", ")}
    `;

    recipeLink = document.createElement("a");
    recipeLink.href = recipe.sourceUrl;
    recipeLink.innerText = "RECIPE DETAILS";

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredients);
    recipeItem.appendChild(recipeLink);
    recipeList.appendChild(recipeItem);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=8&apiKey=${API_KEY}`
  );

  const data = await response.json();

  return data.recipes;
}

async function get() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

get();