
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Landing from './Pages/Landing'

import RecipeDetailPage from './Pages/RecipeDetailPage'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<RootLayout />}>
            <Route index={true} element={<Landing />} />
            <Route path='/recipeDetail' element={<RecipeDetailPage />} />

          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
