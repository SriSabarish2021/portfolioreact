import React, { useContext } from 'react'
import "../Styles/Cert.css"
import { Createcontextsetter } from '../Context/contextfolder'

const Cert = () => {
   const {curclr,dark,certi}=useContext(Createcontextsetter)
 
  return (
    <div className='certificationcontainer'  style={{backgroundColor:dark?`rgb(28, 28, 28)`:`rgb(234, 234, 234)`}}>
      <div className='certhead'>
        <p className='certheadcont' style={{color:dark?`white`:`#625757`}}>Certification</p>
      </div>
      <div className='certificateimages' >
      <style>
        {`
        .certificateimages::-webkit-scrollbar-thumb{
        border-radius: 50px;
        background-color: ${curclr};
        cursor: pointer;}
        `}
      </style>
        <div className='imgaescontainer'  style={{backgroundColor:dark?``:`rgba(253, 247, 244, 0.41)`}}>
          {certi.map((certificateitem)=>(
            <div key={certificateitem.id} className={`img img-${certificateitem.id}`}>
                <div className='imginsider'>
                  <a className='imghref' target='_blank' href={certificateitem.href}>View</a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cert
