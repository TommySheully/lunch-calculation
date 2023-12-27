import React, { ChangeEvent, useState } from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  value: string
  onChange: (value: string) => void
}

export const EditableSpan = function ({ onChange, value: pValue }: Props) {
  const [edit, setEditMode] = useState(false)
  const [value, setValue] = useState(pValue)

  const activateEditMode = () => {
    setEditMode(true)
    setValue(pValue)
  }

  const activateViewMode = () => {
    setEditMode(false)
    onChange(value)
  }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.validity.valid) {
      e.target.value = value
    }
    setValue(e.currentTarget.value)
  }
  return edit ? (
    <TextField
      size={'small'}
      value={value}
      onChange={changeTitle}
      onKeyUp={(e) => e.key === 'Enter' && activateViewMode()}
      autoFocus
      onBlur={activateViewMode}
      inputProps={{ pattern: '[0-9.]*' }}
    />
  ) : (
    <h4 onDoubleClick={activateEditMode}>{pValue}</h4>
  )
}
