import React from 'react'

interface Props {
    children: React.ReactNode
}

const ProjectList = ({ children }: Props) => {
    return <ul className='flex flex-col gap-6 md:gap-24'>{children}</ul>
}

export default ProjectList
