import React from 'react'
import { theme } from 'common'
import Button from '@mui/material/Button'

type PropsType = { callback: () => void, title: string }

export const ButtonUniversal = ({ callback, title }: PropsType) => {
  return (
    <div>
      <Button sx={{ color: theme.color, borderColor: theme.color }}
              onClick={callback}>{title}</Button>
    </div>
  )
}
