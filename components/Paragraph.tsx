import React from 'react'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

interface Props {
    children: string
    styles?: string
}

const Paragraph = ({ children, styles }: Props) => {
    return (
        <motion.p
            className={`text-lg text-light-900 ${styles}`}
            {...scrollFade}
        >
            {children}
        </motion.p>
    )
}

export default Paragraph
