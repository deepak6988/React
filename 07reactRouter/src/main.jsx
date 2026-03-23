import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './components/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github, { githubLoader } from './components/Github.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path : "/",
//       element : <Layout/>,
//       children : [
//         {
//           path : "",
//           element : <Home/>
//         },
//         {
//           path : "about",
//           element : <About/>
//         },
//         {
//           path : "contact",
//           element : <Contact/>
//         },
//         {
//           path : "user/:id",
//           element : <User/>
//         },
//         {
//           path : "git",
//           element : <Github/>
//         },
//       ]
//     }
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='git' element={<Github/>} loader={githubLoader}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
