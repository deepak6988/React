import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    
      <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-19 px-60 insert-x-0'>
          <div className='fixed flex flex-wrap justify-center bg-amber-200 px-3 py-2 rounded-xl gap-2'>
            <button className='rounded-3xl px-4' style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
            <button className='rounded-3xl px-4' style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button className='rounded-3xl px-4' style={{backgroundColor:"black"}} onClick={() => setColor("black")}>Black</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
