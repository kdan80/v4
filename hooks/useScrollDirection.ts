import React from 'react'
import { useScroll } from 'framer-motion'

// This hook keeps track of scroll direction to be used in animations elsewhere.
// It uses framer motions useScroll hook to get the y scroll positon and compares it
// with the previous value. If the difference between the values is positive we are scrolling
// down, if negative we are scrolling up.

type ScrollDirection = 'up' | 'down'

const useScrollDirection = (): ScrollDirection => {
    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>('up')

    React.useEffect(() => {
        let lastScrollY: number = window.pageYOffset
        let ticking: boolean = false

        const updateScrollDirection = (currentScrollY: number) => {
            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
            lastScrollY = currentScrollY > 0 ? currentScrollY : 0
            return (ticking = false)
        }

        const unsubscribeScrollY = scrollY.onChange(currentScrollY => {
            if (!ticking) {
                window.requestAnimationFrame(() => updateScrollDirection(currentScrollY))
                ticking = true
            }
        })

        return () => unsubscribeScrollY()
    }, [scrollY])

    return scrollDirection
}

export default useScrollDirection
