import React, { useEffect } from 'react'
import { purchaseSelector, recipesSelector, useAppDispatch, useAppSelector } from 'app'
import styled from 'styled-components'
import { addAdditionalPurchaseAC, consolidatePurchaseItems, IngredientsComponents, ModalAddIngredients, Purchase, PurchaseSaveButton, recipeType, removeAdditionalPurchaseAC, setPurchaseAC, theme, updateAdditionalPurchaseAC } from 'common'
import { Paper } from '@mui/material'

export const PurchaseList = () => {
  const { purchase, additionalPurchase } = useAppSelector(purchaseSelector)
  const { recipes } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()
  const addIngredientHandler = (ingredient: recipeType) => dispatch(addAdditionalPurchaseAC({ additionalPurchase: ingredient }))
  const removeAdditionalPurchaseHandler = (id: string) => dispatch(removeAdditionalPurchaseAC({ id }))
  const updateAdditionalPurchaseHandler = (newValue: string, id: string) => dispatch(updateAdditionalPurchaseAC({ newValue: Number(newValue), id }))

  useEffect(() => {
    const purchase = consolidatePurchaseItems({recipeItems: recipes, additionalPurchase})
    dispatch(setPurchaseAC({ purchase }))
  }, [additionalPurchase])

  return (
    <Component id="pdf-purchase">
      <Paper
        sx={{ width: '60%', margin: '5px 0', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ModalAddIngredients addIngredientCallback={addIngredientHandler}/>
        <PurchaseSaveButton/>
      </Paper>
      <Paper sx={{ width: '60%', margin: '5px 0', padding: '15px' }}>
        <Header>Список дополнительных ингридиентов к закупке (автоматически
          добавляется к общему списку): </Header>
        {additionalPurchase.map(el => <IngredientsComponents key={el.id} state={el}
                                                             upDateRecipeCallback={updateAdditionalPurchaseHandler}
                                                             deleteIngredientCallback={removeAdditionalPurchaseHandler}/>)}
      </Paper>
      <Paper sx={{ width: '60%', margin: '5px 0', padding: '15px' }}>
        <Header>Итоговый список на закупку (из рецептов и дополнительного списка):</Header>
        {purchase.map(el => <Purchase key={el.id} id={el.id} value={el.value} ingredient={el.ingredient}
                                      measurement={el.measurement}/>)}
      </Paper>
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${theme.background};
`

const Header = styled.h4`
  margin: 0 0 10px 0;
  padding: 0;
`




