import React from 'react'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'

interface Props {
    index: number
    overline?: boolean
    children: React.ReactNode
}

const NumberedHeading = ({ overline = false, index, children }: Props) => {
    return (
        <div
            className='flex gap-2 md:gap-5'
            {...scrollFade}>
            <h2 className='flex gap-2 text-2xl whitespace-nowrap text-main font-semibold md:gap-[0.8rem] md:text-[1.8rem]'>
                <div className='flex items-baseline gap-2 md:gap-[0.8rem'>
                    <span className=' text-hero font-mono font- text-[1.1rem] font-normal'>
                        {index < 10 ? `0${index}.` : `${index}.`}
                    </span>
                    <span>{children}</span>
                </div>
                <div className='h-[100%] w-[300px] flex items-center'>
                    <span className='h-px w-[100%] ml-[10px] bg-hero md:max-w-[300px]' />
                </div>
            </h2>
        </div>
    )
}

export default NumberedHeading
