import React from 'react'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

const Footer = () => {
    return (
        <footer className='flex justify-center items-center h-[6rem] -mt-[6rem]'>
            <motion.span
                {...scrollFade}
                className='text-mainDarker text-sm'
            >
                Designed &amp; Built by Kieran Dansey
            </motion.span>
        </footer>
    )
}

export default Footer
