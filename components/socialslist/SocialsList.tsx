import React from 'react'
import { motion } from 'framer-motion'
import config from 'config/config'
import SocialsListItem from './SocialsListItem'

// Social button fade in and page scroll animations
const socialsListVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 1.2,
            staggerChildren: 0.1,
        },
    },
    scrollIn: {
        opacity: 0,
        y: '100%',
    },
    scrollOut: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
}

const socialsListItemVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
}

const SocialsList = () => {
    return (
        <motion.ol
            className='fixed bottom-0 flex justify-start items-center gap-14 md:gap-10  py-0 px-[5vw] md:px-12 h-20'
            variants={socialsListVariants}
            initial='initial'
            animate='animate'>
            {config.socialLinks.map(({ url, icon: Icon }, index) => (
                <motion.li
                    key={index}
                    variants={socialsListItemVariants}>
                    <SocialsListItem url={url}>
                        <Icon />
                    </SocialsListItem>
                </motion.li>
            ))}
        </motion.ol>
    )
}

export default SocialsList
