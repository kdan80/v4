import React from 'react'
import DocumentHeader from 'components/DocumentHeader'
import Loader from './Loader'
import Header from 'components/header/Header'
import SocialsList from './socialslist/SocialsList'
import useScrolledToTop from 'hooks/useScrolledToTop'
import Footer from 'components/Footer'
import Link from 'next/link'
import useScrollDirection from 'hooks/useScrollDirection'
import HeaderBlurredBackdrop from 'components/header/HeaderBlurredBackdrop'

interface Props {
    location?: string
    children: React.ReactNode
}

const Layout = ({ children, location }: Props) => {
    const isHome = location === '/'
    const is404 = location === '404' && !isHome
    const [isLoading, setIsLoading] = React.useState<boolean>(isHome)
    const scrolledToTop = useScrolledToTop()
    const scrollDirection = useScrollDirection()

    React.useEffect(() => {
        console.log(scrollDirection)
    }, [scrollDirection])

    return (
        <div className='relative min-h-screen max-w-screen overflow-x-hidden flex justify-center items-center font-sans text-light-300 md:text-light-200 selection:bg-heroDark selection:text-white'>
            <DocumentHeader />

            {/* Background image for the entire site */}
            <div className='fixed top-0 left-0 -z-10 bg-img w-screen h-screen bg-no-repeat bg-cover bg-fixed' />

            {
                // prettier-ignore
                isLoading && isHome && !is404 && false
                    ? 
                        <Loader finishLoading={() => setIsLoading(false)} />
                    :   !is404 &&
                        <>
                            {/* <HeaderBlurredBackdrop 
                                scrolledToTop={scrolledToTop} 
                                scrollDirection={scrollDirection} /> */}
                            <Header 
                                scrolledToTop={scrolledToTop} 
                                scrollDirection={scrollDirection} />
                            <main>
                                {children}
                                <Footer />
                            </main>
                            <SocialsList scrolledToTop={scrolledToTop} />
                        </>
            }

            {
                // prettier-ignore
                is404 && 
                    <main className='flex flex-col gap-4 text-light-300 md:text-light-200'>
                        <div className='text-2xl'><span className='text-hero'>404</span> Not Found</div>
                        <Link
                            href='/'
                            className='text-2xl'
                        >&#10230; <span className='text-xl hover:text-hero transition duration-500 ease-in-out'>Go home</span></Link>
                    </main>
            }
        </div>
    )
}

export default Layout
