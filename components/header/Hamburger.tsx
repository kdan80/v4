import React, { Dispatch, SetStateAction } from 'react'

interface Props {
    dropdownIsOpen: boolean
    setDropdownIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const Hamburger = ({ dropdownIsOpen, setDropdownIsOpen }: Props) => {
    const handleClick = () => {
        return setDropdownIsOpen(dropdownIsOpen => !dropdownIsOpen)
    }

    return (
        <button
            className={
                dropdownIsOpen ? 'md:hidden hamburger isOpen z-30' : 'md:hidden hamburger z-30'
            }
            onClick={handleClick}
            type='button'>
            <div className='barBox'>
                <div className='top bar' />
                <div className='middle bar' />
                <div className='bottom bar' />
            </div>
        </button>
    )
}

export default Hamburger
