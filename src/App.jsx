import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Content from './Components/Content'
import Skills from './Components/Skills'
import Cert from './Components/Cert'
import Project from './Components/Project'
import Contact from './Components/Contact'
import About from './Components/About'
import Header from './Components/Header'
import Nav from './Components/Nav'
import { useEffect, useReducer, useState } from 'react';

function App() {

  
  const [dark,setdark]=useState(JSON.parse(localStorage.getItem('theme')))
 
console.log(dark);

 
  useEffect(() => {
      localStorage.setItem('theme',dark)
      console.log(dark);
      
  }, [dark]) 
  let setdarker=()=>{
    setdark(dark=>!dark)
  }
let location=useLocation()
const [txtclr,settxtclr]=useState(false)
let makeclrfunc=(curclr,action)=>{
  switch(action.type){
    case "pink":
      settxtclr(false)
      return `rgb(255, 123, 145)`
    case "green":
      settxtclr(false)
      return `rgb(82, 255, 91)`   
    case "yellow":
        settxtclr(true)
       return `rgb(255, 215, 16)`
    case "blue":
      settxtclr(false)
       return `rgb(108, 82, 255)`
    case "skyblue":
        settxtclr(true)
         return `rgb(0, 239, 219)`
    case "red":
      settxtclr(false)
         return `rgb(255, 50, 84)`
    case "orange":
      settxtclr(false)
       return `rgb(255, 115, 0)`
    default:
      console.log('hello');
  }
}
const [curclr,dispatch]=useReducer(makeclrfunc,`rgb(255, 123, 145)`)



  return (
   <div className='app'>
    <Header dispatch={dispatch} setdarker={setdarker}/>
    <Routes>
      <Route path='/' >
        <Route index element={<Content curclr={curclr} txtclr={txtclr} dark={dark}/>}/>
        <Route path='about' element={<About curclr={curclr} txtclr={txtclr} dark={dark}/>}/>
        <Route path='skills' element={<Skills curclr={curclr} txtclr={txtclr} dark={dark}/>}/>
        <Route path='certificates' element={<Cert curclr={curclr} dark={dark}/>}/>
        <Route path='projects' element={<Project curclr={curclr} dark={dark}/>}/>
        <Route path='contact' element={<Contact curclr={curclr}/>}/>
      </Route>
    </Routes>
    <Nav  location={location} curclr={curclr} txtclr={txtclr}/>
   </div>
  )
}

export default App
