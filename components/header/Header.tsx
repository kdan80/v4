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
    initial: {},
    show: {
        translateY: 0,
    },
    hide: {
        translateY: '-100%',
    },
}

const Header = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)
    const scrollDirection = useScrollDirection()

    console.log('SD: ', scrollDirection)

    return (
        <motion.header
            className='fixed top-0 h-20 w-full py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg'
            variants={headerVariants}>
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
