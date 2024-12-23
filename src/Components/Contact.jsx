import "../Styles/Contact.css"
import { FaPhoneAlt } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CgCloseO } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { Createcontextsetter } from "../Context/contextfolder";

const Contact = () => {
 
  const {curclr,homereturn,bgimgurl,setname,setemail,setmessage,name,email,message,alert,contactsubtbn,closealert,reference}=useContext(Createcontextsetter)
  return (
    <div className='contactcontainer' style={{backgroundImage:`url(${bgimgurl})`}}>
      <style>
        {
          `.alertcontainer button:hover{
            background-color: ${curclr};
            transition-duration: 0.5s;}

            .alertcontainer p{
            color: ${curclr};
            }

            .submitbtndiv button{
             background-color: ${curclr};}

             .phone{
                 color: ${curclr};
             }
    `
        }
      </style>
      <div className='contactcontents'>
        <div className='contacthead'>
          <p className='contactheadcontent'>Contact</p>
        </div>
        <div className='contactform'>
          <div className='linktocontatct'>
            <div className='call'>
              <p className='phone'><FaPhoneAlt/> <span className='calltxt'>Call Me</span></p>
              <a href='tel:+91-8015570575' className='waytocall'>+91 80155-70575</a>
            </div>
            <div className='call'>
              <p className='phone'><TfiLinkedin/> <span className='calltxt'>Linkedin</span></p>
              <a href='https://www.linkedin.com/in/sri-sabarish-b922222a5/' target='_blank' className='waytocall'>sri-sabarish-b922222a5</a>
            </div>
            <div className='call'>
              <p className='phone'><TbBrandGithubFilled/> <span className='calltxt'>Github</span></p>
              <a href='https://github.com/SriSabarish2021' target='_blank' className='waytocall'>SriSabarish2021</a>
            </div>
          </div>
          <div className='inputform'>
            <div className='inputboxes'>
              <div className='nameinp'>
                <label htmlFor="nameinp" className='label'>Name</label>
                <input ref={reference} className='inp' id='nameinp' type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name'/>
              </div>
              <div className='nameinp'>
                <label htmlFor="nameinp" className='label'>Email</label>
                <input className='inp' id='nameinp' type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Your Email'/>
              </div>
              <div className='nameinp'>
                <label htmlFor="nameinp" className='label'>Message</label>
                <textarea className='inp' id='nameinp' type="text" value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Message' style={{minHeight:'100px',maxHeight:'100px',minWidth:'100%',maxWidth:'400px'}}/>
              </div>
              <div className='submitbtndiv'>
                <button onClick={contactsubtbn}>Submit</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>  
      <div className='subalert' style={{display:alert?'flex':'none',animation:alert?"zoomalert 0.4s linear":''}}>
        <p className='close' onClick={closealert}><CgCloseO/></p>
        <div className='alertcontainer'>
          {name&&email&&message?<p>Response Submitted</p>:<p>No Response Received</p>}
          {name&&email&&message?<p><p>Than you for Visiting My Portfolio</p></p>:<p>PLease fill the Field</p>}
          <div className='returnbtns'>
            <button onClick={closealert}>Close</button>
            <button onClick={homereturn}><FaHome/></button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Contact
