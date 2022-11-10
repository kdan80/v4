import React from 'react'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

interface Props {
    children: string
}

const Paragraph = ({ children }: Props) => {
    return (
        <motion.p
            className='text-lg text-mainDarker'
            {...scrollFade}>
            {children}
        </motion.p>
    )
}

export default Paragraph
