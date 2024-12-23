import React from 'react'
import "../Styles/About.css"
import { FaDownload } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useContext } from 'react';
import { Createcontext } from '../Context/Createcontext';

const About = () => {
  const {curclr,txtclr,dark}=useContext(Createcontext)
  return (
    <div className='about' style={{backgroundColor:dark?`rgb(28, 28, 28)`:`rgb(234, 234, 234)`}}>
      <div className='padderabt'>
      <div className='aboutname'>
        <p style={{color:dark?`white`:`#625757`}}>About <span className='span' style={{color:curclr}}>Me</span></p>
      </div>
      <div className='aboutcontent'>
        <div className='personalinfo'>
          <div className='inforhead'>
            <p style={{color:dark?`white`:`#625757`}}>Personal Infos</p>
          </div>
          <div className='infordiv'>
            <style>
              {`
              .infocont1 p{
                    color:${dark?`rgb(179, 179, 179);`:`#4F4A45`}}
              .infocont1 p span{
                    color:${dark?`white`:`#6C5F5B`}}
              .resdown a{
                    color:${dark?`white`:`black`}}      
              .line{
                    color: ${dark?`white`:`#625757`}}
              .boxdivpara{
                    color: ${dark?`white`:`#525B44`}
              }
              `}
            </style>
            <div className='infocont1'>
              <p>Name: <span>Sri Sabarish</span></p>
              <p>Date-of-birth: <span>03-12-2003</span></p>
              <p>Age: <span>21</span></p>
              <p>Email: <span>srisabarish003@gmail.com</span></p>
              <p>Linkedin: <span>sri-sabarish-b922222a5</span></p>
            </div>
            <div  className='infocont1'>
              <p>Degree: <span>B.A.</span></p>
              <p>Interest: <span>Coding Dojos</span></p>
              <p>Place: <span>Chennai</span></p>
              <p>Phone: <span>+91 80155-70575</span></p>
              <p>BrainTrust: <span>Sri Sabarish N</span></p>
            </div>
          </div>
          <div className='btndown'>
            <div className='resdown' style={{borderColor:curclr}}>
                <div className='hidden' style={{backgroundColor:curclr}}></div>
                <a type="button" target="_blank"  href="https://drive.google.com/file/d/1jPjOhSoTfHC2r3BoOCyaH-IOadRIXeb_/view?usp=drive_link">Download Resume <span style={{backgroundColor:curclr,color:txtclr?'black':'white'}}><FaDownload/></span></a>
            </div>
          </div>
        </div>
        <div className='skills'>
          <div className='box1'>
            <p className='boxhead' style={{color:curclr}}>4+</p>
            <div className='boxdiv'>
              <p className='line'><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/></p>
              <p className='boxdivpara'>Years of Experience</p>
            </div>
          </div>
          <div className='box2'>
            <p  className='boxhead' style={{color:curclr}}>30+</p>
            <div  className='boxdiv'>
              <p className='line'><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/></p>
              <p className='boxdivpara'>Projects</p>
            </div>
          </div>
          <div className='box3'>
            <p  className='boxhead' style={{color:curclr}}>10+</p>
            <div className='boxdiv'>
              <p className='line'><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/></p>
              <p className='boxdivpara'>Major works</p>
            </div>
          </div>
          <div className='box4'>
            <p className='boxhead' style={{color:curclr}}>5+</p>
            <div className='boxdiv'>
              <p className='line'><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/><MdOutlineHorizontalRule/></p>
              <p className='boxdivpara'>Interships</p>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default About
