import React from 'react'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

interface Props {
    children: React.ReactNode
    styles?: string
}

const BigButton = ({ children, styles }: Props) => {
    return (
        <motion.button
            {...scrollFade}
            type='button'
            className={`text-hero border border-hero rounded text-sm leading-[1] font-mono px-7 py-5 transition-all duration-300 ease-in-out hover:bg-heroHover focus:bg-heroHover active:bg-heroHover ${styles}`}
        >
            {children}
        </motion.button>
    )
}

export default BigButton
