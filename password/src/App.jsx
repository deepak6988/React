import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [pass, setPass] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [length, setLength] = useState(8)
  const copy = useRef(null)

const passwordGenrator = useCallback(() => {
let str="ABCDEFGHIJKLMNOPQRSTUVZXYZabcdefghijklmnopqrstuvwxyz"
let pass=""
if(numberAllowed) str+="1234567890" 
if(characterAllowed) str+="!@#$%^&*()_+{}|?" 
for (let i = 1; i < length; i++){
  let char = Math.floor(Math.random()*str.length + 1)
  pass+=str.charAt(char)
}
setPass(pass)
}, [setPass,numberAllowed,characterAllowed,length])

const copyfn = () => {
  copy.current?.select();
window.navigator.clipboard.writeText(pass);
}

useEffect(() => {passwordGenrator()},[length,numberAllowed,characterAllowed,passwordGenrator])

  return (
    <div className='w-150 h-80 bg-amber-200 p-2 rounded-2xl text-black'>
      <h1>Password Generator</h1>
      <div className='flex flex-wrap justify-center p-2 m-2 text-white'>  
      <input type="text" className='w-100 mr-2 bg-white text-black' disabled value={pass} ref={copy}/>
      <button onClick={copyfn}>Copy</button>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>
        <label htmlFor=""><input type="range"  className='mr-2' min={6} max={15} value={length} onChange={(e) => {setLength(e.target.value)}} />{length}</label>
        <label htmlFor="n"><input type="checkbox" id='n' className='mr-1' defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}} />Number</label>
        <label htmlFor="c"><input type="checkbox" id='c' className='mr-1'defaultChecked={characterAllowed} onChange={() => {setCharacterAllowed((prev) => !prev)}} />Character</label>
      </div>
    </div>
  )
}

export default App
