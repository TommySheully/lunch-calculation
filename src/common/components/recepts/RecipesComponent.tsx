import React from 'react'
import { recipesSelector, useAppSelector } from 'app'

export const RecipesComponent = () => {
  const a = useAppSelector(recipesSelector)


  return (
    <div>
      <p>hello</p>
    </div>
  )
}
