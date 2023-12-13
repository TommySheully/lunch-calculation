import React from 'react'
import Button from '@mui/material/Button'
import { exceptions, recipeType, setPurchaseAC, theme } from 'common'
import { recipesSelector, useAppDispatch, useAppSelector } from 'app'

export const Purchase = () => {
  const { recipes } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()

  const setPurchaseHandler = () => {
    let purchase: recipeType[] = []
    for (let variable of recipes) {
      for (let ingredient of variable.ingredients) {
        purchase.push(ingredient)
      }
    }

    const purchaseCopy: recipeType[] = JSON.parse(JSON.stringify(purchase))
    const newPurchase = purchaseCopy.reduce((acc, curr) => {
      if (acc[curr.ingredient]) {
        acc[curr.ingredient].value += curr.value
      } else {
        acc[curr.ingredient] = curr
      }
      return acc
    }, {} as Record<string, recipeType>)
    purchase = Object.values(newPurchase).filter(el => !exceptions.includes(el.ingredient))
    dispatch(setPurchaseAC({ purchase }))
  }

  return (
    <div>
      <Button sx={{ color: theme.color, borderColor: theme.color }} onClick={setPurchaseHandler}>Скачать закупочный
        лист</Button>
    </div>
  )
}
