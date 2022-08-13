import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {Header} from '../header/Header'
import {Main} from '../pages/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Main}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App
