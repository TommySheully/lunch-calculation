import styled from 'styled-components'
import { recipeType } from 'common'

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
