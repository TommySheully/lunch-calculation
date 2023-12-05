import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { receiptsType, RecipesReduserType } from 'common'


const initialState: RecipesReduserType = { recipes: [], persons: 100 }

const slice = createSlice({
  name: 'recipes',
  initialState: initialState,
  reducers: {
    updatePersonsAC(state, action: PayloadAction<{ newValue: number }>) {
      state.persons = action.payload.newValue
    },
    addTaskAC(state, action: PayloadAction<{ recipe: receiptsType }>) {
      state.recipes.push(action.payload.recipe)
    },
    updateRecipeAC(state, action: PayloadAction<{ recipe: receiptsType }>) {
      const index = state.recipes.findIndex(el => el.id === action.payload.recipe.id)
      state.recipes[index] = action.payload.recipe
    },
    removeRecipeAC(state, action: PayloadAction<{ id: string }>) {
      const index = state.recipes.findIndex(el => el.id === action.payload.id)
      state.recipes.splice(index, 1)
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
export const { addTaskAC, updateRecipeAC, removeRecipeAC, updatePersonsAC } = slice.actions
