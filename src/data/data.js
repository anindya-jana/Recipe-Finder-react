// Import images from the local src/images folder
import spaghetti from '../images/spaghetti.jpg';
import chickenCurry from '../images/chicken-curry.jpeg';
import avocadoToast from '../images/avocado-toast.jpeg';
import tacos from '../images/tacos.jpeg';
import stirFry from '../images/stir-fry.jpeg';
import pancakes from '../images/pancakes.jpg';
import caesarSalad from '../images/caesar-salad.jpeg';
import brownies from '../images/brownies.jpeg';
import salmon from '../images/salmon.jpeg';

const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: spaghetti,
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
    prepTime: "25 mins",
    ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"]
  },
  {
    id: 2,
    name: "Chicken Curry",
    image: chickenCurry,
    description: "A spicy and savory chicken curry with a rich flavor.",
    prepTime: "40 mins",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes", "Garlic", "Ginger"]
  },
  {
    id: 3,
    name: "Avocado Toast",
    image: avocadoToast,
    description: "A simple yet delicious avocado toast with fresh toppings.",
    prepTime: "10 mins",
    ingredients: ["Bread", "Avocado", "Lemon Juice", "Salt", "Pepper"]
  },
  {
    id: 4,
    name: "Beef Tacos",
    image: tacos,
    description: "Crispy tacos filled with seasoned beef, cheese, and fresh vegetables.",
    prepTime: "30 mins",
    ingredients: ["Ground Beef", "Taco Shells", "Cheddar Cheese", "Lettuce", "Tomatoes", "Sour Cream"]
  },
  {
    id: 5,
    name: "Vegetable Stir Fry",
    image: stirFry,
    description: "A colorful medley of fresh vegetables stir-fried in a savory sauce.",
    prepTime: "20 mins",
    ingredients: ["Broccoli", "Bell Peppers", "Carrots", "Snap Peas", "Soy Sauce", "Garlic"]
  },
  {
    id: 6,
    name: "Fluffy Pancakes",
    image: pancakes,
    description: "Light and fluffy pancakes perfect for a hearty breakfast.",
    prepTime: "15 mins",
    ingredients: ["Flour", "Milk", "Eggs", "Baking Powder", "Sugar", "Butter"]
  },
  {
    id: 7,
    name: "Caesar Salad",
    image: caesarSalad,
    description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and Parmesan.",
    prepTime: "15 mins",
    ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan Cheese", "Lemon Juice"]
  },
  {
    id: 8,
    name: "Chocolate Brownies",
    image: brownies,
    description: "Rich and fudgy chocolate brownies with a crackly top.",
    prepTime: "35 mins",
    ingredients: ["Dark Chocolate", "Butter", "Sugar", "Eggs", "Flour", "Cocoa Powder"]
  },
  {
    id: 9,
    name: "Grilled Salmon",
    image: salmon,
    description: "Perfectly grilled salmon with a hint of lemon and herbs.",
    prepTime: "20 mins",
    ingredients: ["Salmon Fillets", "Lemon", "Olive Oil", "Dill", "Salt", "Pepper"]
  }
];

export default recipes;
