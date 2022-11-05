import React, { SetStateAction } from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion'

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
const navLinkList = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.075,
        },
    },
}

const navLinkItem = {
    initial: {
        opacity: 0,
        translateX: '-7.5rem',
    },
    animate: {
        opacity: 1,
        translateX: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
        },
    },
}

const DropdownNav = ({
    navLinks,
    dropdownIsOpen,
    setDropdownIsOpen,
}: Props) => {
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

    const animate = (index: number) => {
        return index * 75 + 200
    }

    return (
        <nav
            // prettier-ignore
            className={`flex justify-center items-center absolute top-0 left-0 w-full h-screen transition-transform ease-in-out duration-300 backdrop-blur-md bg-dropdownNav ${dropdownIsOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <motion.ol
                className='flex flex-col gap-6'
                variants={navLinkList}
                initial='initial'
                animate={dropdownIsOpen ? 'animate' : undefined}>
                {navLinks.map(({ name, url }, index) => (
                    <motion.li
                        key={index}
                        variants={navLinkItem}
                        onClick={() => setDropdownIsOpen(false)}>
                        <NavLink
                            index={index + 1}
                            name={name}
                            url={url}
                        />
                    </motion.li>
                ))}
            </motion.ol>
        </nav>
    )
}

export default DropdownNav
