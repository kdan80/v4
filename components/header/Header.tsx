import React from 'react'
import Nav from './Nav'
import Hamburger from './Hamburger'
import DropdownNav from './DropdownNav'
import config from 'config/config'
import { motion } from 'framer-motion'

// Framer animations for home link, should be the same as hamburgerVariants in Hamburger.tsx
const homeLinkVariants = {
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
    scrolledToTop: boolean
    scrollDirection: string
}

const Header = ({ scrolledToTop, scrollDirection }: Props) => {
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)

    return (
        <header
            // prettier-ignore
            className={`fixed h-20  w-full top-0 py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg z-20 transition duration-500 ease-in-out
                ${scrolledToTop ? '' : 'bg-[#151718] md:bg-[#15171866] md:backdrop-blur-md shadow'}
                ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'} 
            `}
        >
            <motion.div
                variants={homeLinkVariants}
                initial='initial'
                animate='animate'
            >
                <a href='#landing'>
                    <span className='text-hero'>
                        &lt;/&gt;{' '}
                        <span className='text-light-300 md:text-light-200 hover:text-hero transition ease-in-out duration-500'>
                            kieran dansey
                        </span>
                    </span>
                </a>
            </motion.div>

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
        </header>
    )
}

export default Header