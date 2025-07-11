/* import { Route } from 'react-router-dom'
import './App.css'
import Content from './Components/Content'
import Skills from './Components/Skills'
import Cert from './Components/Cert'
import Project from './Components/Project'
import Contact from './Components/Contact'
import About from './Components/About'
import Header from './Components/Header'
import Nav from './Components/Nav'
import {RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import { ContextSetter, loaderdata } from './Context/contextfolder'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path='/' element={<App/>}>
            <Route index element={<Content/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='skills' element={<Skills/>}/>
            <Route path='certificates' element={<Cert/>}/>
            <Route loader={loaderdata} path='projects' element={<Project/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>

    </>
                
  )
)


function App() {

  return (
   <div className='app'>
    <ContextSetter>
      <Header/>
      <RouterProvider router={router}/>
      <Nav/>
    </ContextSetter>
   </div>
  )
}

export default App */



import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './Components/Content'
import Skills from './Components/Skills'
import Cert from './Components/Cert'
import Project from './Components/Project'
import Contact from './Components/Contact'
import About from './Components/About'
import Header from './Components/Header'
import Nav from './Components/Nav'

import { ContextSetter } from './Context/contextfolder'

function App() {

  return (
   <div className='app'>
    <ContextSetter>
      <Header/>
      <Routes>
        <Route path='/' >
          <Route index element={<Content/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='certificates' element={<Cert/>}/>
          <Route path='projects' element={<Project/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
      <Nav/>
    </ContextSetter>
   </div>
  )
}

export default App