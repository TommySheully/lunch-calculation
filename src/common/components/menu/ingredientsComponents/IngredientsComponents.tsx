import React from 'react'
import { recipeType } from 'common'
import styled from 'styled-components'
export const IngredientsComponents = ({ ingredient, value, measurement }: recipeType) => {

  return (
    <Container >
      <h4>{ingredient}</h4>
      <RightContainer>
        <h4>{value}</h4>
        <h4>{measurement}</h4>
      </RightContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 25px;
  width: 100%;
  
  margin-bottom: 5px;
  padding: 0 5px ;
  border: 1px solid;
`

const RightContainer = styled.div`
  display: flex;
  gap: 0 10px;
`
