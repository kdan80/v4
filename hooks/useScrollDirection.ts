import React from 'react'
import { useScroll } from 'framer-motion'

// This hook keeps track of scroll direction to be used in animations elsewhere.
// It uses framer motions useScroll hook to get the y scroll positon and compares it
// with the previous value. If the difference between the values is positive we are scrolling
// down, if negative we are scrolling up.

type ScrollDirection = 'up' | 'down' | 'static'

interface UseScrollDirection {
    scrollDirection: ScrollDirection
    scrollY: number
}

const useScrollDirection = (): UseScrollDirection => {
    const { scrollY } = useScroll()
    const [lastScrollY, setLastScrollY] = React.useState<number>(0)
    const [scrollDirection, setScrollDirection] =
        React.useState<ScrollDirection>('static')

    const getScrollDirection = (
        currentScrollY: number,
        lastScrollY: number
    ) => {
        if (currentScrollY > lastScrollY) return 'down'
        if (currentScrollY < lastScrollY) return 'up'
        return 'static'
    }

    React.useEffect(() => {
        const unsubscribeY = scrollY.onChange(currentScrollY => {
            setLastScrollY(currentScrollY)
            const scrollDirection = getScrollDirection(
                currentScrollY,
                lastScrollY
            )
            setScrollDirection(scrollDirection)
        })

        return () => unsubscribeY()
    }, [scrollY, lastScrollY])

    return { scrollDirection, scrollY: lastScrollY }
}

export default useScrollDirection
