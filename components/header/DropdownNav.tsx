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

    // This is effect handles page scroll
    // It also automatically closes the dropdown if the page is resized to greater than 768px
    React.useEffect(() => {
        // innerWidth should be >= to the Hamburger.tsx hidden breakpoint
        const onResize = (e: UIEvent) => {
            if (!e.currentTarget) return
            if (window.innerWidth >= 768) {
                setDropdownIsOpen(false)
            }
        }

        // Disable page scroll when dropdown is open
        dropdownIsOpen
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [dropdownIsOpen, setDropdownIsOpen])

    return (
        <nav
            // prettier-ignore
            className={
                `flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#303234aa] backdrop-blur-md transition-all duration-300 ease-in-out
                ${dropdownIsOpen ? 'translate-y-0' : '-translate-y-full'}`
            }
        >
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
        </nav>
    )
}

export default DropdownNav