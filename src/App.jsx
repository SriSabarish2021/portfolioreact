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
<<<<<<< HEAD
import { ContextSetter } from './Context/contextfolder'

=======
import  ContextSetter  from './Context/Createcontext'
>>>>>>> 2f33cee83629bdb25bb840abac7b319e348d2da9

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
