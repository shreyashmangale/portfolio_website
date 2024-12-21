import React from 'react'
import project1 from '../assets/project_1.jpg'
import project2 from '../assets/project_2.jpg'
import { AiOutlineGithub } from 'react-icons/ai'
import ShinyEffect from './ShinyEffect'
const Portfolio = () => {
    const projects = [
        {
            img: project1,
            title: "E-commerce Website",
            description:"Frontend Project Created using ReactJS and for styling TailwindCSS. Has features like browsing products, storing  and retrieving products from Cart and Wishlist.",
            links: {
                site: "https://ecommerce-website-84zx.onrender.com",
                github: "https://github.com/shreyashmangale/Ecommerce-Website.git"
            }
        },
        {
            img: project2,
            title: "Entertainment App",
            description:"Full Stack Project created using MERN Stack technology with features like User Authentication and Authorization, Browsing Collection of Movies And Series, storing your favourites into Bookmark collection.",
            links: {
                site: "https://entertainment-app-y0nt.onrender.com",
                github: "https://github.com/shreyashmangale/entertainment_app.git"
            }
        },
    ]
  return (
    <div className='max-w-[1200px] mx-auto p-6 md:my-12 my-8 pt-36 relative' id='portfolio'>
        <h2 className='text-3xl text-center font-bold text-gray-200 mb-8'>Portfolio</h2>
        <p className='text-center text-gray-400 mb-8'>
                I created various Fullstack Projects using MERN Stack Technology. Check them here
            </p>
        {projects.map((project, index)=> (
            <div key={index} className={`mt-12 flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img src={project.img} alt={project.title} className='w-full h-full object-cover rounded-lg shadow-lg' />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>
                        {project.description}
                    </p>
                    <div className='flex space-x-4'>
                        <a target='_blank' className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 cursor-pointer' href={project.links.site} >View Project</a>
                        <a target='_blank' className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 cursor-pointer' href={project.links.github}><AiOutlineGithub /></a>
                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Portfolio