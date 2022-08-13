import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Main} from '../pages/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Main}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App
