import React from 'react'
import { purchaseSelector, useAppSelector } from 'app'
import styled from 'styled-components'
import { recipeType, theme } from 'common'

export const PurchaseList = () => {
  const { purchase } = useAppSelector(purchaseSelector)

  return (
    <Component id='pdf-purchase'>
      {purchase.map(el => <Purchase id={el.id} value={el.value} ingredient={el.ingredient} measurement={el.measurement} />)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${theme.background};
  width: 50%;
`

export const Purchase = ({ ingredient, value, measurement }: recipeType) => {
  return (
    <Element>
      <h4>{ingredient}</h4>
      <RightContainer>
        <h4>{value}</h4>
        <h4>{measurement}</h4>
      </RightContainer>
    </Element>
  )
}

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 24px;
  width: 100%;
  padding: 3px;
  border: 1px solid;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
  gap: 30px;
`


