import React, { ChangeEvent, useState, memo } from 'react'
import TextField from '@mui/material/TextField'


type EditableSpanPropsType = {
  value: string
  onChange: (newValue: string) => void
}

export const EditableSpan = memo(function ({onChange, value}: EditableSpanPropsType) {

  let [editMode, setEditMode] = useState(false)
  let [title, setTitle] = useState(value)

  const activateEditMode = () => {
    setEditMode(true)
    setTitle(value)
  }
  const activateViewMode = () => {
    setEditMode(false)
    onChange(title)
  }
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return editMode
    ? <TextField size={'small'} value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
    : <h4 onDoubleClick={activateEditMode}>{value}</h4>
})
