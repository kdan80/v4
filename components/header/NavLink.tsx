import React from 'react'

interface Props {
    name: string
    url: string
    index: number
}

const NavLink = ({ index, name, url }: Props) => {
    return (
        <div className='text-center'>
            <div className='text-hero text-sm'>0{index}.</div>
            <a
                className='text-xl text-light-300 md:text-light-200'
                href={url}
            >
                {name}
            </a>
        </div>
    )
}

export default NavLink
