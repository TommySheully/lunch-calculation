import React from 'react'
import { AppBarComponent } from 'common'
import { RecipesComponent } from '../common/components/recepts/RecipesComponent'




function App() {
  return (
    <div>
      <AppBarComponent/>
      <button>add rec</button>
      <RecipesComponent/>
    </div>
  )
}

export default App
