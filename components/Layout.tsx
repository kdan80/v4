import React from 'react'
import DocumentHeader from 'components/DocumentHeader'
import Section from 'components/sections/Section'

interface Props {
    location?: string
    children: React.ReactNode
}

const Layout = ({ children, location }: Props) => {
    const isHome = location === '/'
    const is404 = location === '404'
    const [isLoading, setIsLoading] = React.useState<boolean>(isHome)

    return (
        <div className='min-h-screen'>
            <DocumentHeader />
            {/* Background image for the entire site */}

            <div className='fixed top-0 left-0 -z-10 bg-img w-screen h-screen bg-no-repeat bg-cover bg-fixed' />

            {isLoading && isHome ? (
                <div className='text-red-600'>Hello</div>
            ) : (
                <div className='text-red-600'>Goodbye</div>
            )}
        </div>
    )
}

export default Layout
