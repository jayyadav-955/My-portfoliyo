import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css-logo.png"
import git from "../assets/github.png"
import java from "../assets/java.png"
import javascript from "../assets/javascript.png"
import react from "../assets/React.png"
import sql from "../assets/Mysql.png"
import talwind from "../assets/Tailwind CSS.png"

const Experience = () => {
    const tech=[
        {
            id:1,
            src:html,
            title:"HTML",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title:"JAVASCRIPT",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:"REACT",
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:talwind,
            title:"TAILWIND CSS",
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:java,
            title:"JAVA",
            style:'shadow-red-500'
        },
        {
            id:7,
            src:sql,
            title:"MYSQL",
            style:'shadow-orange-700'
        },
        {
            id:8,
            src:git,
            title:"GITHUB",
            style:'shadow-gray-500'
        },

    ]
  return (
    <div name="Skills" className=' bg-gradient-to-b from-gray-900 to-black w-full h-auto  pt-36'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div mt-36 >
                <p className={`text-4xl font-bold border-b-4 border-gray-500 p-2 inline `}>Skills</p>
                <p className='py-6'>These are the Technologies I've Worked.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    tech.map(({id,src,title,style})=>(
                        <div  key ={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>

                    ))
                }
                
            </div>
        </div>
       
    </div>
  )
}

export default Experience