import React from 'react'

interface Props {
    children: React.ReactNode
    id?: string
}

const Section = ({ children, id }: Props) => {
    return (
        <section
            id={id}
            className='flex justify-center items-center min-h-screen px-[5vw] w-screen'>
            {children}
        </section>
    )
}

export default Section
