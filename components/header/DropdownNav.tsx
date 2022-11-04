import React, { SetStateAction } from 'react'
import Link from 'next/link'

type NavLinks = {
    name: string
    url: string
}

interface Props {
    navLinks: NavLinks[]
    dropdownIsOpen: boolean
    setDropdownIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const DropdownNav = ({
    navLinks,
    dropdownIsOpen,
    setDropdownIsOpen,
}: Props) => {
    // For some reason the DropDown animation is triggering as soon as the page loads
    // I have added this flag to disable this animation until after the component has loaded
    const [componentIsMounted, setComponentIsMounted] = React.useState(false)

    React.useEffect(() => {
        setComponentIsMounted(true)
        // innerWidth should be >= to --bp-sm which is set in src/styles/variables.js
        const onResize = (e: UIEvent) => {
            if (!e.currentTarget) return
            if (window.innerWidth >= 768) {
                setDropdownIsOpen(false)
            }
        }

        window.addEventListener('resize', onResize)

        dropdownIsOpen
            ? document.body.classList.add('disable-scroll')
            : document.body.classList.remove('disable-scroll')

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [dropdownIsOpen, setDropdownIsOpen])

    const navStyles =
        'flex justify-center items-center absolute top-0 left-0 w-full h-screen transition-transform ease-in-out duration-300 backdrop-blur-md bg-dropdownNav'

    return (
        <nav
            className={`${navStyles} ${
                dropdownIsOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <ol className=''>
                {navLinks.map(({ name, url }, index) => (
                    <li
                        key={index}
                        onClick={() => setDropdownIsOpen(false)}>
                        <Link href={url}>{name}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default DropdownNav
