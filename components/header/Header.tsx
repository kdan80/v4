import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import Hamburger from './Hamburger'
import DropdownNav from './DropdownNav'
import config from 'config/config'
import { motion, useAnimationControls } from 'framer-motion'
import useScrollDirection from 'hooks/useScrollDirection'

const Header = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)
    const { scrollDirection, scrollY } = useScrollDirection()
    const headerControls = useAnimationControls()

    // This effect hook controls the header show/hide and blur animations
    React.useEffect(() => {
        if (scrollY >= 250 && scrollDirection === 'down') {
            headerControls.start({
                translateY: '-100%',
            })
        } else {
            headerControls.start({
                translateY: 0,
            })
        }
        if (scrollY === 0) {
            headerControls.start({
                boxShadow: '0 2px 16px rgba(0, 0, 0, 0)',
                backdropFilter: 'blur(0px)',
            })
        }
        if (scrollY > 250 && scrollDirection === 'up') {
            headerControls.start({
                boxShadow: '0 2px 16px rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(16px)',
            })
        }
    }, [scrollDirection, scrollY, headerControls])

    return (
        <motion.header
            // prettier-ignore
            className={`fixed top-0 h-20 w-full py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg`}
            animate={headerControls}
            transition={{
                duration: 0.4,
            }}>
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
