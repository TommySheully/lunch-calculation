import React from 'react'
import { theme } from 'common'
import Button, { ButtonProps } from '@mui/material/Button'

interface Props extends ButtonProps {
  onClick: () => void
}

export const ButtonUniversal = ({ onClick, children, ...props }: React.PropsWithChildren<Props>) => (
  <div>
    <Button {...props} sx={{ color: theme.color, borderColor: theme.color }} onClick={onClick}>
      {children}
    </Button>
  </div>
)
