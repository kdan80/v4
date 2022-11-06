import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import Hamburger from './Hamburger'
import DropdownNav from './DropdownNav'
import config from 'config/config'
import { motion } from 'framer-motion'
import useScrollDirection from 'hooks/useScrollDirection'

// Framer motion animations
const headerVariants = {
    initial: {
        translateY: 0,
    },
    show: {
        translateY: 0,
        backdropBlur: '16px',
    },
    hide: {
        translateY: '-100%',
    },
}

const headerTransition = {
    ease: 'easeInOut',
    bounce: 0,
    duration: 0.3,
}

const Header = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)
    const [showHeader, setShowHeader] = React.useState<boolean>(true)
    const { scrollDirection, scrollY } = useScrollDirection()
    const [blurHeader, setBlurHeader] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (scrollY >= 250 && scrollDirection === 'down') {
            setShowHeader(false)
        } else {
            setShowHeader(true)
        }
        if (scrollY === 0) {
            setBlurHeader(false)
        }
        if (scrollY > 250 && scrollDirection === 'up') {
            setBlurHeader(true)
        }
    }, [scrollDirection, scrollY])

    return (
        <motion.header
            // prettier-ignore
            className={`fixed top-0 h-20 w-full py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg transition duration-500 ease-in-out ${blurHeader ? 'backdrop-blur-lg shadow-[0_2px_16px_0_rgba(0,0,0,.4)]' : ''} `}
            variants={headerVariants}
            initial='initial'
            animate={showHeader ? 'show' : 'hide'}
            transition={headerTransition}>
            <Link href='#landing'>
                <div>
                    <span className='text-hero'>
                        &lt;/&gt;{' '}
                        <span className='text-white hover:text-hero transition ease-in-out duration-500'>
                            kieran dansey
                        </span>
                    </span>
                </div>
            </Link>

            <Nav navLinks={config.navLinks} />
            <DropdownNav
                navLinks={config.navLinks}
                dropdownIsOpen={dropdownIsOpen}
                setDropdownIsOpen={setDropdownIsOpen}
            />
            <Hamburger
                dropdownIsOpen={dropdownIsOpen}
                setDropdownIsOpen={setDropdownIsOpen}
            />
        </motion.header>
    )
}

export default Header
