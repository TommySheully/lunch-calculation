import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Paper } from '@mui/material'
import { purchaseSelector, recipesSelector, useAppDispatch, useAppSelector } from 'app'
import { ButtonUniversal, combiningItem, ModalAddIngredients, recipeType, savePdf, theme } from 'common'
import { addAdditionalPurchaseAC, clearPurchaseAC, removeAdditionalPurchaseAC, setPurchaseAC, updateAdditionalPurchaseAC } from 'redux-state'
import { Purchase, Ingredient } from 'pages'

export const PurchaseList = () => {
  const { purchase, additionalPurchase } = useAppSelector(purchaseSelector)
  const { recipes } = useAppSelector(recipesSelector)
  const dispatch = useAppDispatch()
  const handleIngredientAdd = (ingredient: recipeType) => dispatch(addAdditionalPurchaseAC({ additionalPurchase: ingredient }))
  const handleRemoveAdditionalPurchase = (id: string) => dispatch(removeAdditionalPurchaseAC({ id }))
  const handleUpdateAdditionalPurchase = (newValue: string, id: string) => dispatch(updateAdditionalPurchaseAC({ value: Number(newValue), id }))
  const handleClearPurchase = () => dispatch(clearPurchaseAC())
  const handleSavePdf = () => savePdf('pdf-purchase', 'purchase')

  useEffect(() => {
    const purchase = combiningItem(recipes.flatMap((x) => x.ingredients).concat(additionalPurchase))
    dispatch(setPurchaseAC({ purchase }))
  }, [dispatch, recipes, additionalPurchase])

  return (
    <Component id="pdf-purchase">
      <Paper
        sx={{ width: '60%', margin: '5px 0', padding: '0 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ModalAddIngredients addIngredientCallback={handleIngredientAdd}/>
          <ButtonUniversal onClick={handleClearPurchase}>очистить дополнительный список закупки</ButtonUniversal>
          <ButtonUniversal onClick={handleSavePdf}>скачать закупочный лист</ButtonUniversal>
      </Paper>
      <Paper sx={{ width: '60%', margin: '5px 0', padding: '15px' }}>
        <Header>Список дополнительных ингридиентов к закупке (автоматически
          добавляется к общему списку): </Header>
        {additionalPurchase.map(el => <Ingredient key={el.id} state={el}
                                                  onUpdate={handleUpdateAdditionalPurchase}
                                                  removeIngredient={handleRemoveAdditionalPurchase}/>)}
      </Paper>
      <Paper sx={{ width: '60%', margin: '5px 0', padding: '15px' }}>
        <Header>Итоговый список на закупку (из рецептов и дополнительного списка):</Header>
        {purchase.map(el => <Purchase key={el.id} id={el.id} value={Number((el.value).toFixed(2))} ingredient={el.ingredient}
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




