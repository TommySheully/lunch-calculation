import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { ListRecipes, theme } from 'common'

export const BasicModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Box>
      <Button sx={{ color: theme.color, borderColor: theme.color }} onClick={handleOpen}>Добавить блюдо из списка</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <ListRecipes/>
        </Box>
      </Modal>
    </Box>
  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '80%',
  bgcolor: theme.background,
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  overflowWrap: 'break-word'
}
