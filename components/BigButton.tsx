import React from 'react'
import Link from 'next/link'

interface Props {
    url: string
    children: React.ReactNode
}

const BigButton = ({ url, children }: Props) => {
    return (
        <button
            type='button'
            className='text-hero w-[12.5rem] border border-hero rounded  text-sm font-mono px-7 py-5 transition-all duration-300 ease-in-out hover:bg-heroHover focus:bg-heroHover active:bg-heroHover'>
            <Link
                target='_blank'
                href='/#projects'>
                {children}
            </Link>
        </button>
    )
}

export default BigButton
