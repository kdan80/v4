import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    children: React.ReactNode
    styles?: string
}

const Icon = ({ children, styles }: Props) => {
    return (
        <motion.svg
            initial={{
                fill: '#ffffff',
            }}
            whileHover={{
                translateY: '-3px',
                fill: '#13d5bb',
            }}
            transition={{
                ease: 'easeInOut',
                duration: 0.3,
                bounce: 0,
            }}
            className={`h-5 w-5 cursor-pointer md:h-[22px] md:w-[22px] ${styles}`}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
        >
            {children}
        </motion.svg>
    )
}

export default Icon
