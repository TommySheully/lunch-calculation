import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, InputBase, Paper } from '@mui/material'
import { useDebounce } from 'common'


type SearchFilterComponentType = {
  searchValue: string
  onSetInputValue: (value: string) => void
}

export const SearchFilterComponent: React.FC<SearchFilterComponentType> = ({ searchValue, onSetInputValue }) => {

  const [inputValue, setInputValue] = useState(searchValue)

  const debouncedValue = useDebounce(inputValue, 750)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value)
  }

  useEffect(() => {
    onSetInputValue(debouncedValue)
  }, [debouncedValue, onSetInputValue])

  useEffect(() => {
    setInputValue(searchValue)
  }, [searchValue])

  return (
    <Box sx={searchContainerSx}>
        <Paper sx={paperBlockSx}>
          <InputBase
            sx={inputSx}
            placeholder="Введите название блюда..."
            inputProps={{ 'aria-label': 'search' }}
            onChange={onChangeHandler}
            value={inputValue}
            autoFocus
          />
        </Paper>
    </Box>
  )
}

export const searchContainerSx = {
  display: 'flex',
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  marginLeft: '5px'
}

export const inputSx = {
  minWidth: '400px',
  padding: '5px'
}

export const paperBlockSx = {
  borderRadius: '5px',
}
