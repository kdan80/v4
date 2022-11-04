import React from 'react'
import DocumentHeader from 'components/DocumentHeader'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className=''>
            <DocumentHeader />
            {/* Background image for the entire site */}
            <div className='bg-img w-screen h-screen bg-no-repeat bg-cover bg-fixed' />
        </div>
    )
}

export default Layout
