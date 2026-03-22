import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
  return (
    <>
      <div className='h-100' style={{backgroundColor:`${color}`}}>
        <div className='flex gap-4 p-4 text-black'>
          <div className='bg-red-400 p-4 rounded-xl'onClick={() => setColor("red")}>Red</div>
          <div className='bg-blue-400 p-4 rounded-xl' onClick={() => setColor("blue")}>Blue</div>
          <div className='bg-green-400 p-4 rounded-xl' onClick={() => setColor("green")}>Green</div>
          <div className='bg-yellow-400 p-4 rounded-xl' onClick={() => setColor("yellow")}>Yellow</div>

        </div>

      </div>
    </>
  )
}

export default App
