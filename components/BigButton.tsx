import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

interface Props {
    url: string
    children: React.ReactNode
    styles?: string
}

const BigButton = ({ url, children, styles }: Props) => {
    return (
        <motion.button
            {...scrollFade}
            type='button'
            className={`text-hero border border-hero rounded text-sm leading-[1] font-mono px-7 py-5 transition-all duration-300 ease-in-out hover:bg-heroHover focus:bg-heroHover active:bg-heroHover ${styles}`}
        >
            <Link
                target='_blank'
                href={url}
            >
                {children}
            </Link>
        </motion.button>
    )
}

export default BigButton
