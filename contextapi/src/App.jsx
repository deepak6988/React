import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './component/login'
import Profile from './component/profile'
import { UserProvider } from './context/userContext'

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserProvider value={{user, setUser}}>
      <h1>Working with Context Api</h1>
      <Login/>
      <Profile/>
    </UserProvider>
  )
}

export default App
