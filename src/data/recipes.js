import Yam from "../assets/images/yamFritters.jpg";
import Recipe from "../assets/images/Recipe.png"
import riro from "../assets/images/riro.jpg"
import Amala3 from "../assets/images/Amala3.jpg"
import Ogbono1 from "../assets/images/Ogbono1.jpg"
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    slug: "Ojojo-water-yam-fritters",
    title: "Ojojo water yam fritters",
    image: Yam,
    time: "20 min",
    difficulty: "Easy",
    servings: 4,
    isFavorite: false
  },
  {
    id: 2,
    slug: "efo-riro",
    title: "efo riro",
    image: riro,
    time: "30 min",
    difficulty: "Medium",
    servings: 2,
    isFavorite: true
  },
  {
    id: 3,
    slug: "amala",
    title: "amala",
    image: Amala3,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 4,
    slug: "ogbono-soup",
    title: "ogbono soup",
    image: Ogbono1,
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
