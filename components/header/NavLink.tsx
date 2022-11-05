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
            <div className='text-hero text-sm mb-1.5'>0{index}.</div>
            <Link href={url}>{name}</Link>
        </div>
    )
}

export default NavLink
