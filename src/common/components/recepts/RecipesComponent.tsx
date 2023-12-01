import React from 'react'
import { recipesSelector, useAppSelector } from 'app'

export const RecipesComponent = () => {
  const recipesReduser = useAppSelector(recipesSelector)

  console.log(recipesReduser)

  return (
    <div>

    </div>
  )
}
