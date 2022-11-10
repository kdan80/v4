import React from 'react'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

interface Props {
    index: number
    overline?: boolean
    children: React.ReactNode
}

const NumberedHeading = ({ overline, index, children }: Props) => {
    return (
        <motion.div
            className='flex gap-2 md:gap-5'
            {...scrollFade}
        >
            <h2
                // prettier-ignore
                className={
                    `flex gap-2  whitespace-nowrap text-main  md:gap-[0.8rem] `
                }
            >
                <div className='flex items-baseline gap-2 md:gap-[0.8rem'>
                    <span
                        // prettier-ignore
                        className={
                             `text-hero font-mono text-[1.1rem] font-normal 
                             ${overline ? 'text-base' : undefined}`}
                    >
                        {index < 10 ? `0${index}.` : `${index}.`}
                    </span>
                    <span
                        // prettier-ignore
                        className={`text-2xl md:text-[1.8rem] font-semibold 
                        ${overline ? 'text-lg md:text-lg font-normal md:font-normal text-hero font-mono' : undefined}`}
                    >
                        {children}
                    </span>
                </div>
                <div
                    // prettier-ignore
                    className={
                        `h-[100%] w-[300px] flex items-center 
                        ${ overline ? 'hidden' : undefined}`}
                >
                    <span className='h-px w-[100%] ml-[10px] bg-hero md:max-w-[300px]' />
                </div>
            </h2>
        </motion.div>
    )
}

export default NumberedHeading
