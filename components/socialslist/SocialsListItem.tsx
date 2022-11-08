import React from 'react'

interface Props {
    children: React.ReactNode
    url: string
}

const SocialsListItem = ({ url, children }: Props) => {
    return (
        <a
            target='_blank'
            rel='noreferrer'
            href={url}>
            {children}
        </a>
    )
}

export default SocialsListItem
