import React from 'react'
import pizza from "../assets/projectimg/pizza.png"
import Project1 from "../assets/projectimg/Project1.png"
import Project2 from "../assets/projectimg/Project2.png"
import Project3 from "../assets/projectimg/Project3.png"
import Project4 from "../assets/projectimg/Project4.png"


const Project = () => {
  
  const Projectc=[
    {
      id:1,
      src:pizza,
      name:"Pizza webSite",
      link:"https://github.com/jayyadav-955/pizaa"

    },
    {
      id:2,
      src:Project3,
      name:"Movie Ticket",
      link:"https://github.com/jayyadav-955/Movie-Application"

    },
    {
      id:3,
      src:Project1,
      name:"Routing Application",
      link:"https://github.com/jayyadav-955/Routing"

    },
    {
      id:4,
      src:Project2,
      name:"Currency converter",
      link:"https://github.com/jayyadav-955/CurrencyChange"

    },
    
    
  ]
  return (
    <div name="project" className=' bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-auto pt-20'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-10'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Project</p>
          <p className='py-6 '>Check out some of my work right here</p>
        </div>
        

        <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-4 sm:px-0'>
        {
          Projectc.map(({id,src,name,link})=>(
            <div key={id} className=' shadow-md shadow-gray-700 rounded-lg'>
            <img src={src} alt="" className=' rounded-md duration-200 hover:scale-95' />
            
            <div className='flex items-center justify-center'>
              <button onClick={(e)=>{e.preventDefault();window.location.href = link;}} className='w-1/2 px-6 py-3 m-0 duration-200 hover:scale-105'>Code</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{name}</button>
              
            </div>
          </div>
            

          ))
        }
        
          
        </div>

      </div>
    </div>
  )
}

export default Project