import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24 md:mb-8 md:mx-32 bg-[#190b1f] sm:py-12 py-4 rounded-lg' id='contact'>
            <h2 className='text-3xl text-center font-bold text-gray-200 mb-4'>Contact Me</h2>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className='flex flex-row items-center gap-6 my-4 md:mb-0'
            >

                <div className='flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20'>
                    <motion.a whileHover={{ scale: 1.2 }} href='mailto:shreyashmangale99@gmail.com'>
                        <AiOutlineMail size={40} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/shreyashmangale' target='_blank'>
                        <AiOutlineGithub size={40} />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/shreyashmangale' target='_blank'>
                        <AiOutlineLinkedin size={40} />
                    </motion.a>

                </div>
            </motion.div>
        </div>
    )
}

export default Contact