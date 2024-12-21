import React, { useState } from 'react'
import "../Styles/Nav.css"
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaFolderOpen } from "react-icons/fa6";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { RiAppsLine } from "react-icons/ri";

const Nav = ({location,curclr,txtclr}) => {
  const [navdisp,setnavdisp]=useState(false)
  let setnavtoanimate=()=>{
    setnavdisp(navdisp=>!navdisp)
  }
  console.log(txtclr);
    let pathname=location.pathname
  let homepath=String(location.pathname).length
  
  return (
    <div className='nav'>
      <style>
        {
          `
          .homeli:hover .hmpa{
          background-color: ${curclr};
          transition-duration: 0.8s;}

          .homeli:hover .homelipara{
          width: 100px;
          opacity: 1;
          background-color: ${curclr};
          transition-duration: 0.8s;}
          `
        }
      </style>
      <ul className='ul' id={navdisp?'animatein':'animateout'}>
        <NavLink to='/'>
          <div className='homeli' >
              <p className='homelipara' style={{color:txtclr?'black':'white'}}>Home</p>
              <li className='hmpa' style={{backgroundColor:homepath===1?curclr:''}}><FaHome/></li>
          </div>
        </NavLink>
        <NavLink to='about'>
          <div className='homeli'>
                <p className='homelipara' style={{color:txtclr?'black':'white'}}>About</p>
                <li  className='hmpa' style={{backgroundColor:String(pathname).includes('about')?curclr:''}}><IoPerson/></li>
            </div>
        </NavLink>
        <NavLink to='skills'>
          <div className='homeli'>
              <p className='homelipara' style={{color:txtclr?'black':'white'}}>Skills</p>
              <li  className='hmpa' style={{backgroundColor:String(pathname).includes('skills')?curclr:''}}><GiSkills/></li>
          </div>
        </NavLink>
        <NavLink to='certificates'>
          <div className='homeli'>
              <p className='homelipara' style={{color:txtclr?'black':'white'}}>Certs</p>
              <li  className='hmpa' style={{backgroundColor:String(pathname).includes('certificates')?curclr:''}}><LiaCertificateSolid/></li>
          </div>
        </NavLink>
        <NavLink to='projects'>
          <div className='homeli'>
              <p className='homelipara' style={{color:txtclr?'black':'white'}}>Project</p>
              <li  className='hmpa' style={{backgroundColor:String(pathname).includes('project')?curclr:''}}><FaFolderOpen/></li>
          </div >
        </NavLink>
        <NavLink to='contact'>
          <div className='homeli'>
              <p className='homelipara' style={{color:txtclr?'black':'white'}}>Contact</p>
              <li  className='hmpa' style={{backgroundColor:String(pathname).includes('contact')?curclr:''}}><MdOutlinePhoneForwarded/></li>
          </div>
        </NavLink>
      </ul>
      <div className='navbtnformob' onClick={()=>setnavtoanimate()}>
        <p id={navdisp?'addani':''} className='icon' ><RiAppsLine/></p>
      </div>
    </div>
  )
}

export default Nav
