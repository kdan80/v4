import React, { SetStateAction } from 'react'
import { motion } from 'framer-motion'

// Framer animations for Hamburger, should be the same as homeLinkVariants in Heade.tsx
const hamburgerVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 1,
            ease: 'easeInOut',
        },
    },
}

interface Props {
    dropdownIsOpen: boolean
    toggleDropdown: () => void
}

const Hamburger = ({ dropdownIsOpen, toggleDropdown }: Props) => {

    return (
        <motion.button
            variants={hamburgerVariants}
            initial='initial'
            animate='animate'
            className={
                dropdownIsOpen ? 'md:hidden hamburger isOpen z-30' : 'md:hidden hamburger z-30'
            }
            onClick={toggleDropdown}
            type='button'>
            <div className='barBox'>
                <div className='top bar' />
                <div className='middle bar' />
                <div className='bottom bar' />
            </div>
        </motion.button>
    )
}

export default Hamburger
