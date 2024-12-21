import React from 'react'
import {TypeAnimation} from "react-type-animation";
import ShinyEffect from './ShinyEffect';
import profilepic from '../assets/profile-pic.png';
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin
} from "react-icons/ai"

import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className=' pt-36 sm:px-32 px-4 mx-auto relative' id='home'>
        <div className='grid md:grid-cols-2 place-items-center gap-8'>
            <motion.div
                initial={{opacity:0, y:-50}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}
                transition={{duration: 1}}
            >

                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay:0.5}}
                className='text-gray-500 md:text-5xl text-3xl tracking-tight mb-4'
                >
                    Hey, I Am <br />
                    <span className='md:text-6xl text-4xl text-white'>Shreyash Mangale</span>
                </motion.p>

                <TypeAnimation 
                    sequence={[
                        "FullStack Web Developer",
                        1000,
                        "Frontend Developer",
                        1000,
                        "Backend Developer",
                        1000
                    ]}
                    speed={30}
                    repeat={Infinity}
                    className='font-bold text-gray-400 text-xl md:text-3xl mb-4'
                />

                <motion.p
                initial={{opacity:0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, delay:1}}
                className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mt-6 mb-6'
                >
                    I am a passionate FullStack Developer with expertise in Building Web Apps in MERN Stack Technology
                </motion.p>


                <motion.div
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay:1.5}}
                    className='flex flex-row items-center gap-6 my-4 md:mb-0'
                >
                    <motion.a whileHover={{scale: 1.05, boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.3)"}}
                    className='z-10 cursor-pointer text-gray-200 md:w-auto md:1-auto p-4 border border-purple-400 rounded-xl' target='_blank' href='https://drive.google.com/file/d/1qXqpOnGgHWU6LyffDF9hZEXjvuRgRrnT/view?usp=sharing'
                    >
                        Download CV
                    </motion.a>

                    <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                        <motion.a whileHover={{scale:1.2 }} target='_blank' href='https://github.com/shreyashmangale'>
                            <AiOutlineGithub />
                        </motion.a>
                        <motion.a whileHover={{scale:1.2 }} target='_blank' href='https://www.linkedin.com/in/shreyashmangale'>
                            <AiOutlineLinkedin />
                        </motion.a>

                    </div>
                </motion.div>
            </motion.div>


            <motion.img
                src={profilepic}
                className='w-[300px] md:w-[450px]'
                initial={{opacity:1, y:0}}
                whileInView={{opacity
                    :1, scale:1
                }}
                viewport={{once: true}}
                transition={{duration: 1}}
            />
        </div>

        

        {/* <div className='absolute inset-0 hidden md:block'>
            <ShinyEffect left={0} top={0} size={1400} />
        </div> */}
        
    </div>
  )
}

export default Hero