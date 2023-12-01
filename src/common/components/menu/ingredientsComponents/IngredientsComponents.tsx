import React from 'react'
import { recipeType } from 'common'
export const IngredientsComponents = ({ ingredient, value, measurement }: recipeType) => {

  return (
    <div >
      <h3>{ingredient}</h3>
    </div>
  )
}
