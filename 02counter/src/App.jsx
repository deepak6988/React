import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleRemoveCounter = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Counter Project</h1>
          
        </div>
        <input type="text" value={count} readOnly />
        <button onClick={() => setCount(count + 1)}> ADD Counter </button>
        <button onClick={handleRemoveCounter}> Remove Counter </button>
        
      </section>

      
    </>
  )
}

export default App
