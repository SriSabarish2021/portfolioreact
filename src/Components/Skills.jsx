import "../Styles/Skills.css"
import { CgWebsite } from "react-icons/cg";
import { GrJava } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { useContext } from "react";
import { Createcontextsetter } from "../Context/contextfolder";
import { Image } from '@imagekit/react';

const Skills = () => {
const {curclr,dark,nextchange,prevchange,frntbtn,backendbtn,toolsbtn,softskillbtn,libbtn,showfrnt,showback,showtools,showsoft,showlib}=useContext(Createcontextsetter)

  return (
    <div className='skillcontainer' style={{backgroundColor:dark?`rgb(28, 28, 28)`:`rgb(234, 234, 234)`}}>
      <style>{
          `
        .responsivebar{
        box-shadow:${dark?`rgba(60, 64, 67, 0.644) 0px 1px 2px 0px, rgba(60, 64, 67, 0.557) 0px 2px 6px 2px;`:`rgba(122, 122, 122, 0.77) 0px 1px 2px 0px, rgba(163, 163, 163, 0.75) 0px 2px 6px 2px;`} 
        }`
          }
          
        </style>
      <div className='skillcontainerhead'>
        <p className='techskill' style={{color:dark?`white`:`#625757`}}>Technical Skills</p>
      </div>
      <div className='btnandbox'>
        
        <div className='responsivebar' >
          <div className='arrowicon' onClick={prevchange} style={{color:dark?`rgb(255, 255, 255)`:`rgb(67, 67, 67)`}}><IoArrowBackCircle/></div>
          <div className='changetxt' style={{color:curclr}}><p style={{color:curclr}}>{showfrnt?"Front-End Skills":
                showback?"Back-End Skills":
                showtools?"Tools":
                showsoft?"Soft Skills":
                showlib?"Library":''}</p></div>
          <div className='arrowicon' onClick={nextchange} style={{color:dark?`rgb(255, 255, 255)`:`rgb(67, 67, 67)`}}><IoArrowForwardCircle/></div>
        </div>
        <div className='skillbtn'>
          <style>
            {`.frntendbox:hover{background-color:${curclr};
              transition-duration: 0.7s;
            }
            .libbox:hover{
                background-color:${curclr};
                transition-duration: 0.7s;
            }
            .frntendbox p{
            color:${dark?'white':'#131010'}}
            .libbox p{
            color:${dark?'white':'#131010'}
            }
            .symbolbox{
             color:${dark?'white':'#2A3335'}
            }
             .tablecontentheading p{
             color:${dark?'white':'#131010'}}
            `}
          </style>
          <div className="frntendbox" style={{backgroundColor:showfrnt?curclr:''}} onClick={()=>frntbtn()}>
            <p>Front-End Skills</p>
            <div className='symbolbox' style={{backgroundColor:showfrnt?'transparent':curclr,border:showfrnt?`1px solid ${dark?`white`:`#3B1C32`}`:''}} ><CgWebsite/></div>
          </div>
          <div className='frntendbox' style={{backgroundColor:showback?curclr:''}} onClick={()=>backendbtn()}>
            <p>Back-End Skills</p>
            <div className='symbolbox' style={{backgroundColor:showback?'transparent':curclr,border:showback?`1px solid  ${dark?`white`:`#3B1C32`}`:''}}><GrJava/></div>
          </div>
          <div className='frntendbox' style={{backgroundColor:showtools?curclr:''}} onClick={()=>toolsbtn()}>
            <p>Tools</p>
            <div className='symbolbox' style={{backgroundColor:showtools?'transparent':curclr,border:showtools?`1px solid  ${dark?`white`:`#3B1C32`}`:''}}><FaTools/></div>
          </div>
          <div className='frntendbox' style={{backgroundColor:showsoft?curclr:''}} onClick={()=>softskillbtn()}>
            <p>Soft Skills</p>
            <div className='symbolbox' style={{backgroundColor:showsoft?'transparent':curclr,border:showsoft?`1px solid  ${dark?`white`:`#3B1C32`}`:''}}><RiUserCommunityFill/></div>
          </div>
          <div className='libdiv'>
            <div className='libbox' style={{backgroundColor:showlib?curclr:''}} onClick={()=>libbtn()}>
              <p>Library</p>
              <div className='symbolbox libsym' style={{backgroundColor:showlib?'transparent':curclr,border:showlib?`1px solid  ${dark?`white`:`#3B1C32`}`:''}}><IoLibrary/></div>
            </div>
          </div>
          
        </div>
        <div className='skilltable'>
          <div className='skillboxer' style={{animation:showfrnt?"animatefrnt 0.6s linear":
            showback?"animateback 0.6s linear":
            showtools?"animatetools 0.6s linear":
            showsoft?"animatesoft 0.6s linear":
            showlib?"animatelib 0.6s linear":''
          }}>
            <div className='skilltableboxheading'>
              <p style={{color:dark?'white':'#131010'}}>{showfrnt?"Front-End Skills":
                showback?"Back-End Skills":
                showtools?"Tools":
                showsoft?"Soft Skills":
                showlib?"Library":''}</p>
              {showfrnt?
                <div className='skillimages'
                >
                   <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/html.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/css.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/js.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/ts.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                 
                </div>:
                showback?<div className='skillimages'>
                   <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/js.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/node2.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                </div>:
                showtools?<div className='skillimages'>
                   <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/vs.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/vite.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    /> <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/webpack.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/git.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    /> <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/API.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                    
                
                </div>:
                showsoft?<div className='skillimages'>
                   <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/attention.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    /> <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/communication skill.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                     <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/creativetity.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    /> <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/prbsol.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                
                </div>:
                showlib?<div className='skillimages'>
                  <Image
                    urlEndpoint="https://ik.imagekit.io/fu0jk2cou"
                    src="/react.png"
                    alt="Sri Sabarish.png"
                    className='image-skill'
                    />
                  
                </div>:''} 
            </div>
            <div className='skilltableboxbody'>
              <div className='tablecontent'>
                <div className='tablecontentheading'>
                  {showfrnt?<p>HTML</p>:
                  showback?<p>JavaScript</p>:
                  showtools?<p>Visual Studio Code</p>:
                  showsoft?<p>Attention to Words</p>:
                  showlib?<p>React</p>:
                  ''}
                  {showfrnt?<p>85%</p>:
                  showback?<p>78%</p>:
                  showtools?<p>80%</p>:
                  showsoft?<p>90%</p>:
                  showlib?<p>78%</p>:
                  ''}
                </div>
                <div className='studyline'>
                  <div className='cover' style={{width:showfrnt?'85%':showback?'78%':showtools?'80%':showsoft?'90%':showlib?'78%':'',backgroundColor:curclr}}>
                  </div>
                </div>      
              </div>
            </div>
            {/* next */}
            <div className='skilltableboxbody' style={{display:showlib?'none':'flex'}}>
              <div className='tablecontent'>
                <div className='tablecontentheading'>
                {showfrnt?<p>CSS</p>:
                  showback?<p>Node.js</p>:
                  showtools?<p>Vite</p>:
                  showsoft?<p>Communication</p>:
                  ''}
                  {showfrnt?<p>83%</p>:
                  showback?<p>67%</p>:
                  showtools?<p>80%</p>:
                  showsoft?<p>90%</p>:
                  ''}
                </div>
                <div className='studyline'>
                  <div className='cover' style={{width:showfrnt?'83%':showback?'67%':showtools?'80%':showsoft?'90%':'',backgroundColor:curclr}}>
                  </div>
                </div>      
              </div>
            </div>
            {/* next */}
            <div className='skilltableboxbody' style={{display:showlib||showback?'none':'flex'}}>
              <div className='tablecontent'>
                <div className='tablecontentheading'>
                {showfrnt?<p>JavaScript</p>:
                  showtools?<p>WebPack</p>:
                  showsoft?<p>Creativity</p>:
                  ''}
                  {showfrnt?<p>85%</p>:
                  showtools?<p>60%</p>:
                  showsoft?<p>85%</p>:
                  ''}
                </div>
                <div className='studyline'>
                  <div className='cover' style={{width:showfrnt?'85%':showtools?'60%':showsoft?'85%':'',backgroundColor:curclr}}>

                  </div>
                </div>      
              </div>
            </div>
            {/* next */}
            <div className='skilltableboxbody' style={{display:showlib||showback?'none':'flex'}}>
              <div className='tablecontent'>
                <div className='tablecontentheading'>
                {showfrnt?<p>TypeScript</p>:
                  showtools?<p>Git</p>:
                  showsoft?<p>Problem Solving</p>:
                  ''}
                  {showfrnt?<p>80%</p>:
                  showtools?<p>60%</p>:
                  showsoft?<p>80%</p>:
                  ''}
                </div>
                <div className='studyline'>
                  <div className='cover' style={{width:showfrnt?'80%':showtools?'60%':showsoft?'80%':'',backgroundColor:curclr}}>

                  </div>
                </div>      
              </div>
            </div>
            {/* next */}
            <div className='skilltableboxbody' style={{display:showsoft||showfrnt||showlib||showback?'none':'flex'}}>
              <div className='tablecontent'>
                <div className='tablecontentheading'>
                  {showtools?<p>Rest Api</p>:''}
                  {showtools?<p>73%</p>:''}
                </div>
                <div className='studyline'>
                  <div className='cover' style={{width:showtools?'73%':'',backgroundColor:curclr}}>

                  </div>
                </div>      
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
