import React from 'react'
import { AppBar, Toolbar, Container, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { theme } from 'common'


export const Header = () => {
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
