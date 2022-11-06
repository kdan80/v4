import React from 'react'

interface Props {
    children: React.ReactNode
}

const Section = ({ children }: Props) => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            {children}
        </div>
    )
}

export default Section
