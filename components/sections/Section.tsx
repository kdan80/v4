import React from 'react'

interface Props {
    children: React.ReactNode
    id?: string
}

const Section = ({ children, id }: Props) => {
    return (
        <section
            id={id}
            className='flex justify-center items-center h-screen px-[5vw] w-screen border'>
            {children}
        </section>
    )
}

export default Section
