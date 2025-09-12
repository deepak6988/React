import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {

  let myobj = {
    username: "Deepak",
    age: 22
  }

  return (
    <>
      <h1 className='bg-green-700 p-4 text-black rounded-2xl m-2'>Taiwind and Props</h1>
      <Card No = "45" btn= "save" />
      <Card  No = "55" btn= "delete" />
    </>
  )
}

export default App
