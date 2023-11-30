import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: any = { value: 'adssaddas' }

const slice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    /*    removeTaskAC(state, action: PayloadAction<{ taskId: string, todolistId: string }>) {
          const tasks = state[action.payload.todolistId]
          const index = tasks.findIndex(t => t.id === action.payload.taskId)
          tasks.splice(index, 1)
        },*/
    addTaskAC(state, action: PayloadAction<{ task: any }>) {
      const tasks = state[action.payload.task.todoListId]
      tasks.unshift(action.payload.task)
    }
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
