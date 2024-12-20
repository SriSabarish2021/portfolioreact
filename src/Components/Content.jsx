import React, { useState,useEffect } from 'react'
import "../Styles/Content.css"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Content = ({curclr,txtclr,dark}) => {
    const navigate=useNavigate()
    let returnhome=()=>{
        navigate('/about')
    }
    let homelocation=useLocation()
    let homepath=String(homelocation.pathname).includes('/')
    const [animate,setanimate]=useState(false)

    useEffect(() => {
            setanimate(true)   
      return () => {
        setanimate(false)
      }
    }, [homepath])
    
    console.log(curclr);
    
  return (
    <main className='maincontent'>
        <style>{
            `.maincontent{
                width: 100%;
                height: auto;
                min-height: 600px;
                max-height: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                text-align: center;
            }
            .maincontent::before{
                content: '';
                width: 30%;
                height: 100%;
                position: fixed;
                background-color:${curclr};
                z-index: -10000;
                transform: skew(20deg);
                left: -200px;
            }
            .maincontent::after{
                content: '';
                height: 100%;
                width:100%;
                position: fixed;
                background-color:${dark?`rgb(28, 28, 28)`:'rgb(234, 234, 234)'} ;
                z-index: -1000000;
            }
            .homearrbtn:hover .arrowpara{
                background-color:${curclr};}
            .work{
                color:${dark?`aliceblue`:`#334257`}  ;}
            .introcontdiv{
                color:${dark?`aliceblue`:`#625757`} 
            }`}
            </style>
        <div className='imgbg'>
            <div className='imagediv' style={{animation:animate?"imganimate 0.8s linear forwards":''}}>
                <img src="./public/Profileimg/myimg.png" alt="Sri Sabarish.png" />
            </div>
        </div>
        <div className='contbg'>
            <div className='bold'>
                <p className='name' style={{animation:animate?"zoomanimate 1s linear":'',color:curclr}}>- i'm Sri Sabarish.</p>
                <div className='webdev'>
                    <p className='work'>Web Developer</p>
                </div>
            </div>
            <div className='intro'>
                <div className='introcontdiv'>
                    <p style={{animation:animate?"rotateanimate 1s linear":''}}>I'm a web developer and technology enthusiast with over three years of experience in creating dynamic, user-focused web solutions. My journey started with a curiosity about the internet and AI, which grew into a passion for building innovative digital experiences and many more..</p>
                </div>
                
            </div>
            <div className='homebtn'>
                <div className='homearrbtn' onClick={()=>returnhome()}>
                    <p className='arrow' style={{backgroundColor:`${curclr}`}}><FaArrowRight/></p>
                    <p className='arrowpara'  style={{backgroundColor:`${curclr}`,color:txtclr?'black':'white'}}>More About Me</p>
                </div>
            </div>

           
        </div>
    </main>
  )
}

export default Content
