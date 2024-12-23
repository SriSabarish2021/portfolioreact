import "../Styles/Project.css"
import { useContext } from 'react'
import { Createcontextsetter } from '../Context/contextfolder'

const Project = () => {
 const {curclr,dark,projwork}=useContext(Createcontextsetter)
  
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
