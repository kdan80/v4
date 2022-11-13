import React from 'react'
import Link from 'next/link'

interface Props {
    children: React.ReactNode
    url: string
}

const SocialsListItem = ({ url, children }: Props) => {
    return (
        <Link
            target='_blank'
            rel='noreferrer'
            href={url}
        >
            {children}
        </Link>
    )
}

export default SocialsListItem
