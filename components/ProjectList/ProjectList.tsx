import React from 'react'

interface Props {
    children: React.ReactNode
}

const ProjectList = ({ children }: Props) => {
    return <ul className='flex flex-col gap-8 md:gap-24'>{children}</ul>
}

export default ProjectList
