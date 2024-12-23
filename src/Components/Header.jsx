import React, { useContext } from 'react'
import "../Styles/Header.css"
import { SlSettings } from "react-icons/sl";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { Createcontextsetter } from '../Context/contextfolder';
import { BsMoonStarsFill } from "react-icons/bs";

const Header = () => {
  const {dispatch,setdarker,dark,clrcont,showclor}=useContext(Createcontextsetter)
  return (
    <div className='header'>
        <div className='settings'>
            <div style={{border:dark?'':`1px solid rgb(179, 179, 179)`}} id={clrcont?'animateclr':'closeanimate'} className='headbtn' onClick={()=>showclor()}><SlSettings/>
              <div className='colorcontainer'>
                <p style={{color:`rgb(255, 123, 145)`}} onClick={()=>dispatch({type:"pink"})}><FaDroplet/></p>
                <p style={{color:`rgb(48, 255, 58)`}}  onClick={()=>dispatch({type:"green"})}><FaDroplet/></p>
                <p style={{color:`rgb(255, 215, 16)`}}  onClick={()=>dispatch({type:"yellow"})}><FaDroplet/></p>
                <p style={{color:`rgb(79, 48, 255)`}}  onClick={()=>dispatch({type:"blue"})}><FaDroplet/></p>
                <p style={{color:`rgb(0, 239, 219)`}}  onClick={()=>dispatch({type:"skyblue"})}><FaDroplet/></p>
                <p style={{color:`rgb(255, 19, 59)`}}  onClick={()=>dispatch({type:"red"})}><FaDroplet/></p>
                <p style={{color:`rgb(255, 115, 0)`}}  onClick={()=>dispatch({type:"orange"})}><FaDroplet/></p>
              </div>
            </div>
            <div className='headbtn' onClick={setdarker} style={{border:dark?'':`1px solid rgb(179, 179, 179)`}}>{dark?<MdOutlineWbSunny/>:<BsMoonStarsFill></BsMoonStarsFill>}</div>
        </div>
    </div>
  )
}

export default Header
