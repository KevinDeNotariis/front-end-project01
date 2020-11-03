import React from 'react'
import './App.css'

import AppBody from './components/AppBody'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>Project X Header</h1>
        </header>

        <AppBody />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
