import { createContext } from 'react'
import { useEffect, useReducer, useState, useLayoutEffect, useRef} from 'react';
import {  useLocation, useNavigate  } from 'react-router-dom'
export const Createcontextsetter = createContext({})


export const ContextSetter=({children})=>{
    
    
  
  const [showfrnt,setshoefrnt]=useState(true)
  const [showback,setshoeback]=useState(false)
  const [showtools,setshoetools]=useState(false)
  const [showsoft,setshoesoft]=useState(false)
  const [showlib,setshoelib]=useState(false)

     /*  Content page items */
      let navigate=useNavigate()
      
      const [dark,setdark]=useState(JSON.parse(localStorage.getItem('theme')))
 
      let homelocation=useLocation()
      let homepath=String(homelocation.pathname).includes('/')
 
      const [animate,setanimate]=useState(false)

      useEffect(() => {
              setanimate(true)   
        return () => {
          setanimate(false)
        }
      }, [homepath])
 
     /*  Content page items ends*/
      /*  Certification pag starts */

      const [certi,setceti]=useState([])
      useEffect(() => {
        let certificatedata=[{
          id:1,
          href:"https://drive.google.com/file/d/11EzCUJia-njTTwcfQx4XAbkQ28odIL35/view?usp=sharing"
        },
        {
          id:2,
          href:"https://drive.google.com/file/d/1yJo2jR5aUNgf-vTBoPWqHkrUrrG2K8OK/view?usp=sharing"
        },
        {
          id:3,
          href:"https://drive.google.com/file/d/1h63ihJNWbXaqUzDdbkLcBYb4SaEkCFSq/view?usp=sharing"
        },
        {
          id:4,
          href:"https://drive.google.com/file/d/1anhlq-gPwe3qCYQGraq9_Mmp2UFRA9X3/view?usp=sharing"
        },
        {
          id:5,
          href:"https://drive.google.com/file/d/1UjYhqZkSY8Ea12PRFkhgf2UZ-HPp1eDY/view?usp=sharing"
        },
        {
          id:6,
          href:"https://drive.google.com/file/d/1FYi6MZwwRviRK79tLhZ-_9hsAiusqt5u/view?usp=sharing"
        },
        {
          id:7,
          href:"https://drive.google.com/file/d/1D33t5ooRgg8hmkat0ijq9OicdRuz7mVG/view?usp=sharing"
        },
        {
          id:8,
          href:"https://drive.google.com/file/d/19_IVN7sr1S9usLf_eRKWTArn9pcFUMs8/view?usp=sharing"
        },
        {
          id:9,
          href:"https://drive.google.com/file/d/1bWZzqvtO6OngixVJziPq49hIK2acMqQu/view?usp=sharing"
        },
        {
          id:10,
          href:"https://drive.google.com/file/d/1ftjXsZK5q168SSDsFUnB_ZsN5DlqT2Ug/view?usp=sharing"
        },
        {
          id:11,
          href:"https://drive.google.com/file/d/1dJuY7zo1tG4MwxTJL0TdapV1t9JAuys8/view?usp=sharing"
        },
        {
          id:12,
          href:"https://drive.google.com/file/d/1oQemXwNVzjxKvgBfvTBK2k2Nb25dryT-/view?usp=sharing"
        }]
        
        setceti(certificatedata)
       
        return () => {
          setceti([])
        }
      }, [])

     /*  Certificate page  ends*/
           /*  project  page starts */


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
      
       
       return () => {
         setprojwork([])
       }
     }, [])


      /*  project  page ends */
 /*  contact  page start */

   const [bgimgurl,setbgimgurl]=useState('')
 
      let homereturn=()=>{
        navigate('/')
      }
      useLayoutEffect(() => {
    
        setbgimgurl("Contactpage/contactpagebg.jpg")
        
        return () => {
          setbgimgurl('')
    
        };
      }, [])
      const [name,setname]=useState('')
        const [email,setemail]=useState('')
        const [message,setmessage]=useState('')
        const [alert,setalrt]=useState(false)
      
       
      
        
       
      
        let contactsubtbn=()=>{
          if (name&&email&&message) {
 
            setalrt(true)
          }else{
            setalrt(true)
          }
          
        }
        let reference=useRef()

      
        let closealert =()=>{
          setalrt(false)
          setname('')
          setemail('')
          setmessage('')
          reference.current.focus()
        }

 /*  contact  page ends */

  /*  skill  page starts */
  
     let frntbtn=()=>{
       setshoeback(false)
       setshoetools(false)
       setshoesoft(false)
       setshoelib(false)
       setshoefrnt(true)
     }
     let backendbtn=()=>{
       setshoefrnt(false)
       setshoetools(false)
       setshoesoft(false)
       setshoelib(false)
       setshoeback(true)
     }
     let toolsbtn=()=>{
       setshoeback(false)
       setshoefrnt(false)
       setshoesoft(false)
       setshoelib(false)
       setshoetools(true)
     }
     let softskillbtn=()=>{
       setshoetools(false)
       setshoeback(false)
       setshoefrnt(false)
       setshoelib(false)
       setshoesoft(true)
     }
     let libbtn=()=>{
       setshoesoft(false)
       setshoetools(false)
       setshoeback(false)
       setshoefrnt(false)
       setshoelib(true)
     }
   
     const [funcarr,setfuncarr]=useState([frntbtn,backendbtn,toolsbtn,softskillbtn,libbtn])
     const [arrnum,setarrnum]=useState(0)
   
     let nextchange=()=>{
       setarrnum((prevArrnum) => {
         const newIndex = (prevArrnum + 1) % funcarr.length;
         funcarr[newIndex](); 
         
         return newIndex
       }); 
     }
     let prevchange=()=>{
       setarrnum((arrbefnum) => {
         let newIndex = arrbefnum - 1;
         if (newIndex===-1) {
           newIndex=4
         }
         funcarr[newIndex](); 
         
         return newIndex
       });
      
       
     }
 
 /*  common for all pages */
  useEffect(() => {
      localStorage.setItem('theme',dark)
     
      
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
 /*  common for all pages  ends */
const [curclr,dispatch]=useReducer(makeclrfunc,`rgb(255, 123, 145)`)

const [clrcont,setclrcont]=useState(false)
let showclor=()=>{
 setclrcont(!clrcont)
}

    let gotoabout=()=>{
        navigate('/about')
    }

return(
  <Createcontextsetter.Provider value={{dispatch,setdarker,dark,clrcont,showclor,curclr,txtclr,gotoabout,animate,frntbtn,backendbtn,toolsbtn,softskillbtn,libbtn,showfrnt,showback,showtools,showsoft,showlib,nextchange,prevchange,certi,projwork,homereturn,bgimgurl,contactsubtbn,reference,closealert,name,email,message,setname,setemail,setmessage,alert,location}}>
    {children}
  </Createcontextsetter.Provider>
)
}