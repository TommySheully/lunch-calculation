import React, { useState } from 'react'
import { recipes } from 'common'
import styled from 'styled-components'
import { DescriptionRecipe } from 'components'
import { SearchFilterComponent } from './SearchRecipes'

export const ListRecipes = () => {
  const [inputValue, setInputValue] = useState('')

  const filtered = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(inputValue.toLowerCase()))

  const handleSetInput = (value: string) => setInputValue(value)

  return (
    <Component>
      <SearchFilterComponent searchValue={inputValue} onSetInputValue={handleSetInput}/>
      {filtered.map((el) => <DescriptionRecipe key={el.id} recipe={el}/>)}
    </Component>
  )
}

const Component = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
