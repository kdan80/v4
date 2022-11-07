import React from 'react'

interface Props {
    children: React.ReactNode
    id?: string
}

const Section = ({ children, id }: Props) => {
    return (
        <div
            id={id}
            className='flex justify-center items-center w-full h-screen'>
            {children}
        </div>
    )
}

export default Section
