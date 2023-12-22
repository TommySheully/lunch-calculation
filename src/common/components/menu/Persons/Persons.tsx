import { Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { EditableSpan } from 'common'

type PropsType = {
  persons: number
  changePersons: (persons: string) => void
}

export const Persons = ({changePersons, persons}: PropsType) => {
  return (
    <Paper sx={{ width: '60%', margin: '5px 0', padding: '0 15px' }}>
      <Container>
        <h2 style={{ margin: '8px 0' }}>Расчет на количество человек</h2>
        <EditableSpan value={persons.toString()} onChange={changePersons}/>
      </Container>
    </Paper>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
