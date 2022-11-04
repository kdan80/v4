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

    // ${mixins.flexCenter};
    // justify-content: center;
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100vh;
    // background-color: var(--dropmenu-fill);
    // transform: translateY(-100%);
    // //transition: transform 300ms ease-in-out;

    const navStyles =
        'flex absolute top-0 left-0 w-full h-screen bg-black transition-transform ease-in-out duration-300'

    return (
        <nav
            className={`${navStyles} ${
                dropdownIsOpen ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <ol>
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
