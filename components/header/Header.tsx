import React from 'react'
import Nav from './Nav'
import Hamburger from './Hamburger'
import DropdownNav from './DropdownNav'
import config from 'config/config'
import { motion } from 'framer-motion'
import useScrollDirection from 'hooks/useScrollDirection'

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
}

const Header = ({ scrolledToTop }: Props) => {
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)
    const scrollDirection = useScrollDirection()

    //drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)]

    return (
        <>
            <div
                // prettier-ignore
                className={`fixed h-20 w-full top-0 transition duration-[500ms] ease-in-out z-80 
                ${scrolledToTop ? '' : 'backdrop-blur'}
                ${scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'}
                `}
            />
            <header
                // prettier-ignore
                className={`fixed h-20 w-full top-0 py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg z-90 transition duration-500 ease-in-out
                ${scrolledToTop ? '' : 'shadow'}
                ${scrollDirection === 'down' ? 'translate-y-[-100%]' : 'translate-y-0 '} 
                `}
            >
                <motion.div
                    variants={homeLinkVariants}
                    initial='initial'
                    animate='animate'
                    className='relative z-92'
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
        </>
    )
}

export default Header

// import React from 'react'
// import Nav from './Nav'
// import Hamburger from './Hamburger'
// import DropdownNav from './DropdownNav'
// import config from 'config/config'
// import { motion, useAnimationControls } from 'framer-motion'
// import useScrollDirection from 'hooks/useScrollDirection'

// // Framer animations for home link, should be the same as hamburgerVariants in Hamburger.tsx
// const homeLinkVariants = {
//     initial: { opacity: 0 },
//     animate: {
//         opacity: 1,
//         transition: {
//             duration: 0.3,
//             delay: 1,
//             ease: 'easeInOut',
//         },
//     },
// }

// interface Props {
//     scrolledToTop: boolean
// }

// const Header = ({ scrolledToTop }: Props) => {
//     const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)
//     const scrollDirection = useScrollDirection()
//     const headerControls = useAnimationControls()

//     // This effect hook controls the header show/hide and blur animations
//     React.useEffect(() => {
//         if (scrollDirection === 'down') {
//             headerControls.start({
//                 translateY: '-100%',
//             })
//         } else {
//             headerControls.start({
//                 translateY: 0,
//             })
//         }
//         if (scrolledToTop) {
//             headerControls.start({
//                 boxShadow: '0 2px 16px rgba(0, 0, 0, 0)',
//                 backdropFilter: 'blur(0px)',
//             })
//         }
//         if (!scrolledToTop && scrollDirection === 'up') {
//             headerControls.start({
//                 boxShadow: '0 2px 16px rgba(0, 0, 0, 0.4)',
//                 backdropFilter: 'blur(16px)',
//             })
//         }
//     }, [scrollDirection, headerControls, scrolledToTop])

//     return (
//         <motion.header
//             // prettier-ignore
//             className={`fixed top-0 h-20 w-full py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg z-20`}
//             animate={headerControls}
//             transition={{
//                 duration: 0.4,
//             }}
//         >
//             <motion.div
//                 variants={homeLinkVariants}
//                 initial='initial'
//                 animate='animate'
//             >
//                 <a href='#landing'>
//                     <span className='text-hero'>
//                         &lt;/&gt;{' '}
//                         <span className='text-light-300 md:text-light-200 hover:text-hero transition ease-in-out duration-500'>
//                             kieran dansey
//                         </span>
//                     </span>
//                 </a>
//             </motion.div>

//             <Nav navLinks={config.navLinks} />
//             <DropdownNav
//                 navLinks={config.navLinks}
//                 dropdownIsOpen={dropdownIsOpen}
//                 setDropdownIsOpen={setDropdownIsOpen}
//             />
//             <Hamburger
//                 dropdownIsOpen={dropdownIsOpen}
//                 setDropdownIsOpen={setDropdownIsOpen}
//             />
//         </motion.header>
//     )
// }

// export default Header
