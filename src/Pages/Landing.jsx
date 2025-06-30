import React from 'react'
import Hero from '../components/Hero'
import FavoriteFoods from '../components/FavoriteFoods'
import ApprovedDieticians from '../components/ApprovedDieticians'
import PopularRecipesSection from '../components/PopularRecipeSection'
import RecipeSubscription from '../components/RecipeSubscription'
import LatestRecipesSection from '../components/LatestRecipesSection'


const Landing = () => {
    return (
        <div>
            <Hero />
            <FavoriteFoods/>
            <ApprovedDieticians/>
            <PopularRecipesSection/>
            <RecipeSubscription/>
            <LatestRecipesSection/>
        </div>
    )
}

export default Landing