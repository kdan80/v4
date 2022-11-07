import React from 'react'
import Section from './Section'
import { motion, useAnimationControls } from 'framer-motion'
import Link from 'next/link'

const landingPageContainerVariants = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
}

const landingPageItemVariants = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    fadeIn: {
        opacity: 1,
        transition: {
            duration: 0.2,
        },
    },
    fadeOut: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
}

const Landing = () => {
    const landingPageControls = useAnimationControls()
    const [pageLoadAnimationsComplete, setPageLoadAnimationsComplete] = React.useState(false)

    React.useEffect(() => {
        // prettier-ignore
        (async () => {
            await landingPageControls.start('animate')
            setPageLoadAnimationsComplete(true)
        })()
    }, [landingPageControls])

    const itemProps = {
        variants: landingPageItemVariants,
        viewport: {
            margin: '0px 10px 0px 10px',
            amount: 1,
        },
        animate: pageLoadAnimationsComplete ? 'fadeOut' : undefined,
        whileInView: pageLoadAnimationsComplete ? 'fadeIn' : undefined,
    }

    return (
        <Section id='landing'>
            <motion.div
                className='section-container flex flex-col justify-between gap-6'
                variants={landingPageContainerVariants}
                initial='initial'
                animate={landingPageControls}>
                <motion.h1
                    {...itemProps}
                    className='text-hero font-mono text-landingH1 mb-2'>
                    Hi, my name is
                </motion.h1>
                <motion.h2
                    {...itemProps}
                    className='font-semibold leading-[.9] text-landingH2 text-main'>
                    Kieran Dansey.
                </motion.h2>
                <motion.h3
                    {...itemProps}
                    className='font-semibold leading-[.9] text-landingH2 text-mainDarker'>
                    I build things for the web.
                </motion.h3>
                <motion.p
                    {...itemProps}
                    className='md:max-w-[60%] text-mainDarker leading-[1.5rem] text-lg'>
                    I am a freelance web developer, and occasional designer, with a passion for
                    building exceptional digital experiences.
                </motion.p>
                <motion.div
                    {...itemProps}
                    className='mt-12'>
                    <Link
                        href='/#projects'
                        className='text-hero w-[12.5rem] border border-hero rounded  text-sm font-mono px-7 py-5 transition-all duration-300 ease-in-out hover:bg-heroHover focus:bg-heroHover active:bg-heroHover'>
                        View My Projects
                    </Link>
                </motion.div>
            </motion.div>
        </Section>
    )
}

export default Landing
