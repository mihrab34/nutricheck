import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Landing from './Pages/Landing'
import RecipesPage from './Pages/RecipesPage'
import Collections from './Pages/Collections'
import Ojojo from './Pages/RecipeDetailPages/Ojojo'
import Amala from './Pages/RecipeDetailPages/Amala'
import RiroEfo from './Pages/RecipeDetailPages/RiroEfo'
import OgbonoSoup from './Pages/RecipeDetailPages/OgbonoSoup'
import OkroSoup from './Pages/RecipeDetailPages/OkroSoup'
import EweduRecipe from './Pages/RecipeDetailPages/EweduRecipe'
import Gbegriri from './Pages/RecipeDetailPages/Gbegiri'

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
            <Route path='/recipe/ogbono-soup' element={<OgbonoSoup />} />
            <Route path='/recipe/Ila-plain-Okro-soup' element={<OkroSoup />} />
            <Route path='/recipe/ewedu' element={<EweduRecipe />} />
            <Route path='/recipe/gbegiri' element={<Gbegriri />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
