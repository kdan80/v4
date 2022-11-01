import React from 'react'
import Image from 'next/image'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className=''>
            {/* Background image for the entire site */}
            <div className='bg-img w-screen h-screen bg-no-repeat bg-cover bg-fixed' />
        </div>
    )
}

export default Layout
