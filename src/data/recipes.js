import Yam from "../assets/images/yamFritters.jpg";
import Recipe from "../assets/images/Recipe.png"
import riro from "../assets/images/riro.jpg"
import Amala3 from "../assets/images/Amala3.jpg"
import Ogbono1 from "../assets/images/Ogbono1.jpg"
import Okro2 from "../assets/images/Okro2.jpg"
import Ewedu3 from "../assets/images/Ewedu3.jpg"
import Gbegiri1 from "../assets/images/Gbegiri1.jpg"
import Asaro1 from "../assets/images/Asaro1.jpg"
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
    slug: "Ila-plain-Okro-soup",
    title: "Ila (plain Okro soup)",
    image: Okro2,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 6,
    slug: "ewedu",
    title: "ewedu",
    image: Ewedu3,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 7,
    slug: "gbegiri",
    title: "gbegiri",
    image: Gbegiri1,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 8,
    slug: "asaro",
    title: "asaro",
    image: Asaro1,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  {
    id: 9,
    slug: "ikokore",
    title: "ikokore",
    image: Asaro1,
    time: "25 min",
    difficulty: "Easy",
    servings: 3,
    isFavorite: false
  },
  // Add more recipes as needed
];

export default recipes;
