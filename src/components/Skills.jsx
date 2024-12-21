import React from 'react'
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiGithub,

} from 'react-icons/di';
import renderlogo from '../assets/renderco_logo.jpeg'
import { AiOutlineGithub } from 'react-icons/ai';

const Skills = () => {
    const skills = [
        {
            category: 'Frontend',
            technologies: [
                { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
                { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
                { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
                { name: 'ReactJS', icon: <DiReact className='text-blue-500' /> },
                { name: 'Tailwind CSS', icon: <img width="25" height="25" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/> },
                { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
                { name: 'Sass', icon: <DiSass className='text-pink-600' /> }
            ]
        },
        {
            category: 'Backend',
            technologies: [
                { name: 'Node JS', icon: <DiHtml5 className='text-green-500' /> },
                { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
                { name: 'Github', icon: <DiGithub className='text-orange-600' /> },
                { name: 'ExpressJS', icon:             <img width="25" height="25" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js"/>
                }
            ]
        },
        {
            category: 'Hosting Platform',
            technologies: [
                { name: 'Render', icon: <img width="25" height="25" src={renderlogo} alt="render"/> },
                { name: 'Github Pages', icon: <AiOutlineGithub className='text-purple-400'/> },
 
            ]
        },
    ]
    return (
        <div className='flex flex-col justify-center items-center px-4 text-gray-200 pb-8 py-8 pt-36' id='skills'>
            <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>

            <div className='flex flex-col md:flex-row gap-8 justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1200px] mx-auto'>
                {skills.map((skill, index) => (
                    <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:max-w-[500px]'>
                        <h3 className='text-xl font-bold mb-4 text-center text-white'>{skill.category}</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {skill.technologies.map((tech, idx) => (
                                <div key={idx} className='flex items-center space-x-2'>
                                    <span className='text-2xl'>{tech.icon}</span>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>    
                ))}
            </div>

        </div>
    )
}

export default Skills