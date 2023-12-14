import React from 'react'
import Button from '@mui/material/Button'
import { consolidatePurchaseItems, setPurchaseAC, theme } from 'common'
import { recipesSelector, useAppDispatch, useAppSelector } from 'app'

export const Purchase = () => {
  const { recipes } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()

  const setPurchaseHandler = () => {
    const purchase = consolidatePurchaseItems(recipes)
    dispatch(setPurchaseAC({ purchase }))
  }

  return (
    <div>
      <Button sx={{ color: theme.color, borderColor: theme.color }} onClick={setPurchaseHandler}>Скачать закупочный лист</Button>
    </div>
  )
}
