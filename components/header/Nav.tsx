import React from 'react'
import Link from 'next/link'

type NavLink = {
    name: string
    url: string
}

interface Props {
    navLinks: NavLink[]
}

const Nav = ({ navLinks }: Props) => {
    return (
        <nav>
            <ol className='hidden md:flex gap-8'>
                {navLinks.map(({ name, url }, index) => (
                    <li
                        className='hover:text-hero transition-all duration-500 ease-in-out'
                        key={index}>
                        <Link className='' href={url}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Nav
