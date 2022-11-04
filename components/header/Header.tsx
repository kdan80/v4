import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import Hamburger from './Hamburger'
import config from 'config/config'

const Header = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState<boolean>(false)

    return (
        <header className='fixed top-0 h-20 w-full py-0 px-[5vw] md:px-12 flex justify-between items-center text-lg'>
            <Link href='#landing'>
                <div>
                    <span className='text-hero'>
                        &lt;/&gt;{' '}
                        <span className='text-white hover:text-hero transition ease-in-out duration-500'>
                            kieran dansey
                        </span>
                    </span>
                </div>
            </Link>

            <Nav navLinks={config.navLinks} />
            <Hamburger
                dropdownIsOpen={dropdownIsOpen}
                setDropdownIsOpen={setDropdownIsOpen}
            />
        </header>
    )
}

export default Header
