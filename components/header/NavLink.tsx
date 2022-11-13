import React from 'react'
import Link from 'next/link'

interface Props {
    name: string
    url: string
    index: number
}

const NavLink = ({ index, name, url }: Props) => {
    return (
        <div className='text-center'>
            <div className='text-hero text-sm'>0{index}.</div>
            <Link
                className='text-xl text-light-300 md:text-light-200'
                href={url}
            >
                {name}
            </Link>
        </div>
    )
}

export default NavLink
