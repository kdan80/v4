import React from 'react'

const useScrolledToTop = (): boolean => {
    const [scrolledToTop, setScrolledToTop] = React.useState<boolean>(true)

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 768) return setScrolledToTop(window.pageYOffset < 250)
            return setScrolledToTop(window.pageYOffset === 0)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrolledToTop
}

export default useScrolledToTop
