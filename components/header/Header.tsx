import React from 'react'
import Link from 'next/link'
import config from 'config/config'

const Header = () => {
    return (
        <header className='fixed top-0 h-20 w-full py-0 px-4 md:px-12 flex justify-between items-center border-2'>
            <Link href='#landing'>
                <div>
                    <span>
                        &lt;/&gt; <span>kieran dansey</span>
                    </span>
                </div>
            </Link>

            <nav className='flex'>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
            </nav>
        </header>
    )
}

export default Header
