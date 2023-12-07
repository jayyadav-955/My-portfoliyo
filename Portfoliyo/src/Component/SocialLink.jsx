import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const SocialLink = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/jay-yadav-164069266",style:'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <>
                Github<FaGithub size={30}/>
                </>
            ),
            href:"https://www.github.com/jayyadav-955",
        },
        {
            id:3,
            child:(
                <>
                Mail<HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:jaykumarybscit@tcsmumbai.in",
        },
        {
            id:4,
            child:(
                <>
               Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"/JAY KUMAR YADAV Re.pdf",style:'rounded-br-md',
            download:true,
        },
    ]
    return (
        <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id,child,href,download,style})=>(
                    <li key={id} className={' flex justify-between items-center w-36 h-12 px-4 bg-gray-800 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]' +" " +style}>
                    <a href={href} className='flex justify-between items-center w-full text-white' 
                    download={download} target='_blanck' rel='noreferrer'>
                    {child}
                </a>
                </li>

                ))}
                
            </ul>

        </div>
    )
}

export default SocialLink