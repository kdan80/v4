import React, { SetStateAction } from 'react'
import NavLink from './NavLink'

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

    return (
        <nav
            // prettier-ignore
            className={`flex justify-center items-center absolute top-0 left-0 w-full h-screen transition-transform ease-in-out duration-300 backdrop-blur-md bg-dropdownNav ${dropdownIsOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <ol className='flex flex-col gap-6'>
                {navLinks.map(({ name, url }, index) => (
                    <li
                        key={index}
                        onClick={() => setDropdownIsOpen(false)}
                        // prettier-ignore
                        className={`-ml-[25rem] opacity-0  ${dropdownIsOpen && `ml-0 opacity-100 transition-all ease-in-out duration-[250ms] delay-[${(index + 1) * 75 + 200}ms]`}`}>
                        <NavLink
                            index={index + 1}
                            name={name}
                            url={url}
                        />
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default DropdownNav
