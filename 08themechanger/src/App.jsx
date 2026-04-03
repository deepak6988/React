import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ThemeBtn from './components/themebtn'
import Card from './components/card'
import { ThemeProvider } from './context/theme'

function App() {
  const [theme, setTheme] = useState('light');

  const darktheme = () => {
    setTheme('dark');
  }

  const lighttheme = () => {
    setTheme('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark");
    document.querySelector('html').classList.add(theme);
    // console.log(theme);
  }, [theme]);

  return (

    <ThemeProvider value = {{theme, darktheme, lighttheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <h1 className='text-center w-full'>Theme Changer</h1>

        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
