import React from 'react'
import { motion } from 'framer-motion'

type NavLink = {
    name: string
    url: string
}

interface Props {
    navLinks: NavLink[]
}

const navLinksListVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const navLinksItemVariants = {
    initial: {
        opacity: 0,
        translateY: '-100%',
    },
    animate: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.3,
        },
    },
}

const Nav = ({ navLinks }: Props) => {
    return (
        <nav>
            <motion.ol
                variants={navLinksListVariants}
                initial='initial'
                animate='animate'
                className='hidden md:flex gap-8'
            >
                {navLinks.map(({ name, url }, index) => (
                    <motion.li
                        variants={navLinksItemVariants}
                        className=' hover:text-hero transition-all duration-500 ease-in-out'
                        key={index}
                    >
                        <a href={url}>{name}</a>
                    </motion.li>
                ))}
            </motion.ol>
        </nav>
    )
}

export default Nav
