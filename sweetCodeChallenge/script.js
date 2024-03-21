function cakes(recipe, ingredients) {
    const recipeObj = new Map();
    const recipeArray = recipe.split(",");
    for (let i = 0; i < recipeArray.length; i++) {
        const [ingredient, quantity] = recipeArray[i].split(":");
        recipeObj.set(ingredient.trim(), parseFloat(quantity));
    }

    const ingredientsObj = new Map();
    const ingredientsArray = ingredients.split(",");
    for (let i = 0; i < ingredientsArray.length; i++) {
        const [ingredient, quantity] = ingredientsArray[i].split(":");
        ingredientsObj.set(ingredient.trim(), parseFloat(quantity));
    }

    const cakesCount = [];
    for (let [ingredient, quantity] of recipeObj) {
        if (!ingredientsObj.has(ingredient)) {
            alert(`Недостатньо інгредієнта "${ingredient}"`);
            return;
        }
        cakesCount.push(Math.floor(ingredientsObj.get(ingredient) / quantity));
    }

    if (cakesCount.length === 0) {
        alert('Рецепт порожній');
        return;
    }

    const minCakes = Math.min.apply(null, cakesCount);
    alert(`Ви можете виготовити ${minCakes} тістечок`);
}

cakes(
    prompt("Введіть рецепт (наприклад: яйця: 2, яблука: 0.5, борошно: 500)"),
    prompt("Введіть наявні інгредієнти (наприклад: яйця: 2, яблука: 0.5, борошно: 500)")
);