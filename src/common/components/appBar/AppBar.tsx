import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { theme } from '../../utils/config/theme'


export const AppBarComponent = () => {
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', color: theme.color }}>
          <Button component={Link} to="/Menu" sx={{ color: 'inherit', borderColor: 'inherit' }}>
            Список меню
          </Button>
          <Button component={Link} to="/Purchase" sx={{ color: 'inherit', borderColor: 'inherit' }}>
            Список на закупку
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
