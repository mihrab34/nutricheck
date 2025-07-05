import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Landing from './Pages/Landing'
import RecipesPage from './Pages/RecipesPage'
import FriedRiceWithCheese from './Pages/RecipeDetailPages/FriedRiceWithCheese'
import PastaCarbonara from './Pages/RecipeDetailPages/PastaCarbonara'
import VegetableStirFry from './Pages/RecipeDetailPages/VegetableStirFry'
import SpicyChickenWrap from './Pages/RecipeDetailPages/SpicyChickenWrap'
import AvocadoToast from './Pages/RecipeDetailPages/AvocadoToast'
import GrilledSalmon from './Pages/RecipeDetailPages/GrilledSalmon'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<RootLayout />}>
            <Route index={true} element={<Landing />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/recipe/fried-rice-with-cheese' element={<FriedRiceWithCheese />} />
            <Route path='/recipe/pasta-carbonara' element={<PastaCarbonara />} />
            <Route path='/recipe/vegetable-stir-fry' element={<VegetableStirFry />} />
            <Route path='/recipe/spicy-chicken-wrap' element={<SpicyChickenWrap />} />
            <Route path='/recipe/avocado-toast' element={<AvocadoToast />} />
            <Route path='/recipe/grilled-salmon' element={<GrilledSalmon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
