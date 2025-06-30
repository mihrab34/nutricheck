import React from 'react'
import RecipeHero from '../components/RecipeHero'
import NutritionInfoSection from '../components/NutritionInfoSection '
import IngredientsAndInstructions from '../components/IngredientsAndInstructions'
import CommentsSection from '../components/Comments'
import RecipeSubscription from '../components/RecipeSubscription'
import UsersAlsoViewed from '../components/UsersAlsoViewed'

const RecipeDetailPage = () => {
    return (
        <div>
            <RecipeHero />
            <NutritionInfoSection />
            <IngredientsAndInstructions />
            <CommentsSection/>
            <UsersAlsoViewed />
            <RecipeSubscription/>
        </div>
    )
}

export default RecipeDetailPage