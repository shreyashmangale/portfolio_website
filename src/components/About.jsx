import React from 'react'
import { motion } from 'framer-motion';
import {
    DiCss3,
    DiGithub,
    DiHtml5,
    DiJavascript1,
    DiMongodb,
    DiNodejsSmall,
    DiReact
} from 'react-icons/di';
import { AiOutlineGithub } from 'react-icons/ai';

const About = () => {
  return (
    <div className='text-center text-white pb-12 pt-36' id='about'>
        <h3 className='text-3xl font-bold'>About Me</h3>

        <div className='grid grid-cols-1'>
        <motion.p
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay:1}}
                className='text-gray-400 max-w-[300px] md:max-w-[800px] md:text-2xl text-lg mt-6 mb-6 text-center mx-auto'
                >
                    I am a passionate full-stack developer with expertise in building scalable, responsive, and feature-rich web applications using the MERN stack. I have a strong foundation in front-end development, creating user-friendly interfaces with React and Tailwind CSS, and back-end development. <br /> <br />
                    I am eager to continue building innovative and impactful applications using MERN stack technologies, leveraging my skills to solve real-world challenges.
                </motion.p>


                <p className='text-gray-200 '>My Tech Stack</p>
                <motion.div
            initial={{opacity:0}}
            whileInView={{opacity
                :1
            }}
            viewport={{once: true}}
            transition={{duration: 1, delay: 1}}
            className='flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-4'
        >
            <DiHtml5 className='text-orange-600 mx-2'/>
            <DiCss3 className='text-blue-600 mx-2'/>
            <DiJavascript1 className='text-yellow-500 mx-2'/>
            <DiReact className='text-blue-500 mx-2'/>
            <DiNodejsSmall className='text-green-500 mx-2'/>
            <div className='mx-2'>
            <img width="64" height="64" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js"/>

            </div>
            <DiMongodb className='text-green-600'/>
            <div className='flex justify-center items-center sm:w-[60px] w-[30px] sm:h-[30px] h-[40px] mx-2'>
            <AiOutlineGithub className='text-purple-400'/>
            </div>

        </motion.div>

        </div>
    </div>
  )
}

export default About