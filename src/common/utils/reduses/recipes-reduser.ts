import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { receiptsType } from '../types/type'

const initialState: receiptsType[] = []

const slice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    addTaskAC(state, action: PayloadAction<{  recipe: receiptsType }>) {
        state.unshift(action.payload.recipe)
    }

    /*    removeTaskAC(state, action: PayloadAction<{ taskId: string, todolistId: string }>) {
      const tasks = state[action.payload.todolistId]
      const index = tasks.findIndex(t => t.id === action.payload.taskId)
      tasks.splice(index, 1)
    },*/
    /*    updateTaskAC(state, action: PayloadAction<{
          taskId: string,
          model: UpdateDomainTaskModelType,
          todolistId: string
        }>) {
          const tasks = state[action.payload.todolistId]
          const index = tasks.findIndex(t => t.id === action.payload.taskId)
          tasks[index] = {...tasks[index], ...action.payload.model}
        }*/
  },
  extraReducers: (builder) => {
    /*    builder.addCase(addTodolistAC, (state, action) => {
          state[action.payload.todolist.id] = []
        })
        builder.addCase(removeTodolistAC, (state, action) => {
          delete state[action.payload.id]
        })
        builder.addCase(setTodolistsAC, (state, action) => {
          action.payload.todolists.forEach(tl => {
            state[tl.id] = []
          })
        })*/
  }
})

export const recipesReducer = slice.reducer
export const { addTaskAC } = slice.actions
