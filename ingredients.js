const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}
// Write a for loop that prints out the contents of ingredients:
for (let y = 0; y < ingredients.length; y++) {
  console.log(ingredients[y]);
}
for (let y = (ingredients.length) - 1; y >= 0; y--) {
  console.log(ingredients[y]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards: