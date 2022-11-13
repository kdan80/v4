import React from 'react'

interface Props {
    children: React.ReactNode
    styles?: string
}

const Icon = ({ children, styles }: Props) => {
    return (
        <svg
            // prettier-ignore
            className={`h-5 w-5 cursor-pointer hover:translate-y-[-3px] transition duration-500 ease-in-out ${styles}`}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
        >
            {children}
        </svg>
    )
}

export default Icon
