import React from 'react'
import MobileUI from './MobileUI'
import DesktopUI from './DesktopUI'

interface Props {
    project: Project
    reverseLayout: boolean
    isMobile: boolean
}

const Project = ({ project, reverseLayout, isMobile }: Props) => {
    return (
        <>
            {
                // prettier-ignore
                isMobile
                    ? <MobileUI project={project} />
                    : <DesktopUI project={project} reverseLayout={reverseLayout} />
            }
        </>
    )
}

export default Project
