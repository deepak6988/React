import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <div>
        <h1>React Props</h1>
        <Card username = "Deepak" btnText = "Click Next"/>
        <Card username = "Random" />
      </div>
    </>
  )
}

export default App
