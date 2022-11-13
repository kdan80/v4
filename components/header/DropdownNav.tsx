import React, { SetStateAction } from 'react'
import NavLink from './NavLink'
import { motion, AnimatePresence } from 'framer-motion'

type NavLinks = {
    name: string
    url: string
}

interface Props {
    navLinks: NavLinks[]
    dropdownIsOpen: boolean
    setDropdownIsOpen: React.Dispatch<SetStateAction<boolean>>
}

// Framer Animations
const navDropdown = {
    initial: {
        translateY: '-100%',
    },
    animate: {
        translateY: 0,
    },
}

const navDropdownTransition = {
    duration: 0.3,
    bounce: 0,
    ease: 'easeInOut',
}

const navLinkList = {
    initial: {
        opacity: 0,
        translateX: '-7.5rem',
    },
    animate: {
        opacity: 1,
        translateX: 0,
        transition: {
            type: 'spring',
            bounce: 0.45,
            delayChildren: 0.3,
            staggerChildren: 0.075,
        },
    },
    exit: {
        opacity: 0,
    },
}

const DropdownNav = ({ navLinks, dropdownIsOpen, setDropdownIsOpen }: Props) => {
    // For some reason the DropDown animation is triggering as soon as the page loads
    // I have added this flag to disable this animation until after the component has loaded
    const [componentIsMounted, setComponentIsMounted] = React.useState(false)

    React.useEffect(() => {
        setComponentIsMounted(true)
        // innerWidth should be >= to the Hamburger.tsx hidden breakpoint
        const onResize = (e: UIEvent) => {
            if (!e.currentTarget) return
            if (window.innerWidth >= 768) {
                setDropdownIsOpen(false)
            }
        }

        window.addEventListener('resize', onResize)

        // Disable scrolling when the dropdown is open
        dropdownIsOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [dropdownIsOpen, setDropdownIsOpen])

    return (
        <motion.nav
            variants={navDropdown}
            initial='initial'
            animate={dropdownIsOpen ? 'animate' : undefined}
            transition={navDropdownTransition}
            // prettier-ignore
            className='flex justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur-md'
        >
            <div className='absolute top-0 left-0 bg-dark-500 opacity-60 w-full h-full' />
            <AnimatePresence>
                {dropdownIsOpen && (
                    <motion.ol
                        className='flex flex-col gap-12'
                        variants={navLinkList}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        {navLinks.map(({ name, url }, index) => (
                            <motion.li
                                key={index}
                                variants={navLinkList}
                                onClick={() => setDropdownIsOpen(false)}
                            >
                                <NavLink
                                    index={index + 1}
                                    name={name}
                                    url={url}
                                />
                            </motion.li>
                        ))}
                    </motion.ol>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default DropdownNav
