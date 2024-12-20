import React, { useState,useEffect } from 'react'
import "../Styles/Project.css"
import { useLocation } from 'react-router-dom'

const Project = ({curclr,dark}) => {
  let projlocation=useLocation()
  let projectpath=String(projlocation.pathname).includes('/projects')
  const [projwork,setprojwork]=useState([])
  useEffect(() => {
    let projectarray=[
      {
        id:1,
        sitehref:"https://txtt2voice.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/Txt-2-Speech"
      },
      {
        id:2,
        sitehref:"https://numbercalculatior.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/Calculator"
      },
      {
        id:3,
        sitehref:"https://weatheridentifierforplaces.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/WeatherFinder2/tree/main"
      },
      {
        id:4,
        sitehref:"https://edupracticesite.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/edusite"
      },
      {
        id:5,
        sitehref:"https://speech2txtt.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/SpeechToTxt"
      },
      {
        id:6,
        sitehref:"https://funwithhkeys.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/Keybordfunn/tree/main"
      },
      {
        id:7,
        sitehref:"https://canvadrawing.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/canva"
      },
      {
        id:8,
        sitehref:"https://tempercon.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/tempconv"
      },
      {
        id:9,
        sitehref:"https://stopwatchtimeclock.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/stopwatch"
      },
      {
        id:10,
        sitehref:"https://rockpaperrsissors.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/rockpapersissor"
      },
      {
        id:11,
        sitehref:"https://websiteclock.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/clock"
      },
      {
        id:12,
        sitehref:"https://socialmedreact.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/socialmedia"
      },
      {
        id:13,
        sitehref:"https://socialmedreact.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/Add-on-Lister"
      },
      {
        id:14,
        sitehref:"https://goturbmi.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/BMIcalculator"
      },
      {
        id:15,
        sitehref:"https://digclck.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/Digital-Clock"
      },
      {
        id:16,
        sitehref:"https://currencygotter.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/CurrencyConvertor"
      },
      {
        id:17,
        sitehref:"https://monthlyglance.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/MonthlyCalender"
      },
      {
        id:18,
        sitehref:"https://qrdev.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/qrcodegenerator"
      },
      {
        id:19,
        sitehref:"https://strngpasswordgen.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/Password-Generator"
      },
      {
        id:20,
        sitehref:"https://quoterprovider.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/advicer"
      },
      {
        id:21,
        sitehref:"https://weatherofurcity.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/WeatherFinder"
      },
      {
        id:22,
        sitehref:"https://colorpickapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/colorpicker"
      },
      {
        id:23,
        sitehref:"https://timeclockrrapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/timeclock"
      },
      {
        id:24,
        sitehref:"https://counterclrapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/counter"
      },
      {
        id:25,
        sitehref:"https://stpwatchapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/stopwatch2"
      },
      {
        id:26,
        sitehref:"https://actionboard.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/todoactionboard"
      },
      {
        id:27,
        sitehref:"https://currencyconviapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/curconver"
      },
      {
        id:28,
        sitehref:"https://simpcurrconvapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/simplecurconvapp"
      },
      {
        id:29,
        sitehref:"https://reactpassgenapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/reactpassgen"
      },
      {
        id:30,
        sitehref:"https://reacttoggleapp.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/toggle"
      },
      {
        id:31,
        sitehref:"https://reactportfolioappofme.netlify.app/",
        codehref:"https://github.com/SriSabarish2021/reactportfolio"
      },
      {
        id:32,
        sitehref:"https://annamarresearch.com/",
        codehref:"Built in Wordpress"
      }
    ]
    setprojwork(projectarray)
    console.log(projectpath);
    console.log(projectarray);
    
    return () => {
      setprojwork([])
    }
  }, [projectpath])
  
  return (
    <div className='projectcontainer' style={{backgroundColor:dark?`rgb(28, 28, 28)`:`rgb(234, 234, 234)`}}>
      <style>
        {
          `.projimages::-webkit-scrollbar-thumb{
            border-radius: 50px;
            background-color:${curclr};;
            cursor: pointer;}
`
        }
      </style>
      <div className='projhead'>
        <p className='projheadcont' style={{color:dark?`white`:`#625757`}}>Projects</p>
      </div>
      <div className='projimages'>
        <div className='projimgaescontainer' style={{backgroundColor:dark?``:`rgba(253, 247, 244, 0.41)`}}>
          {projwork.map((projectitem)=>(
            <div key={projectitem.id} className={`projimg projimg-${projectitem.id}`}>
              <div className='projimginsider'>
                <a target="_blank" className="projimghref" href={projectitem.sitehref}>View Site</a>
                <a target="_blank" className="projimghref" href={projectitem.codehref} style={{display:projectitem.id===32?'none':'block'}}>View Code</a>
                <p style={{display:projectitem.id===32?'flex':'none',backgroundColor:'white',padding:'5px',border:'1px solid grey', borderRadius:'5px'}}>Built in Wordpress</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
