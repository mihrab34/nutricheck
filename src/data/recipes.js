import Recipe from "../assets/images/Recipe.png";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    slug: "fried-rice-with-cheese",
    title: "Rice with Fried Cheese",
    image: Recipe,
    time: "20 min",
    difficulty: "Easy",
    servings: 4,
    isFavorite: false
  },
  {
    id: 2,
    slug: "pasta-carbonara",
    title: "Pasta Carbonara",
    image: Recipe,
    time: "30 min",
    difficulty: "Medium",
    servings: 2,
    isFavorite: true
  },
  {
    id: 3,
    slug: "vegetable-stir-fry",
    title: "Vegetable Stir Fry",
    image: Recipe,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 4,
    slug: "spicy-chicken-wrap",
    title: "Spicy Chicken Wrap",
    image: Recipe,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 5,
    slug: "avocado-toast",
    title: "Avocado Toast",
    image: Recipe,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 6,
    slug: "grilled-salmon",
    title: "Grilled Salmon",
    image: Recipe,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  }
  // Add more recipes as needed
];

export default recipes;
