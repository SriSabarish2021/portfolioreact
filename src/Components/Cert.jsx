import React, { useState,useEffect } from 'react'
import "../Styles/Cert.css"
import { useLocation } from 'react-router-dom'

const Cert = ({curclr,dark}) => {
  let certilocation=useLocation()
  let certificationpath=String(certilocation.pathname).includes('/certificates')
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
    console.log(certificatedata);
    console.log(certificationpath);
    
    
    return () => {
      setceti([])
    }
  }, [certificationpath])
  
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
