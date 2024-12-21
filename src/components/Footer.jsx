import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[50px] bg-[#190b1f] text-center text-white sm:text-2xl text-lg flex items-center justify-center py-4'>
        <h3>Made by Shreyash Mangale with <FontAwesomeIcon icon={faHeart} style={{color: "#f00000",}} /> &copy; Copyright 2024</h3>
    </div>
  )
}

export default Footer