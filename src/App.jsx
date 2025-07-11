import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Landing from './Pages/Landing'
import RecipesPage from './Pages/RecipesPage'
import SpicyChickenWrap from './Pages/RecipeDetailPages/SpicyChickenWrap'
import AvocadoToast from './Pages/RecipeDetailPages/AvocadoToast'
import GrilledSalmon from './Pages/RecipeDetailPages/GrilledSalmon'
import Collections from './Pages/Collections'
import Ojojo from './Pages/RecipeDetailPages/Ojojo'
import Amala from './Pages/RecipeDetailPages/Amala'
import RiroEfo from './Pages/RecipeDetailPages/RiroEfo'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<RootLayout />}>
            <Route index={true} element={<Landing />} />
            <Route path='/recipes' element={<RecipesPage />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/recipe/Ojojo-water-yam-fritters' element={<Ojojo />} />
            <Route path='/recipe/efo-riro' element={<RiroEfo />} />
            <Route path='/recipe/amala' element={<Amala />} />
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
