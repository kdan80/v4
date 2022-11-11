import React from 'react'
import Section from './Section'
import Image from 'next/image'
import { Github, External } from 'components/icons'
import { motion } from 'framer-motion'
import NumberedHeading from 'components/NumberedHeading'
import { scrollFade20 } from 'styles/framerAnimations'
import ProjectList from 'components/ProjectList/ProjectList'
import Project from 'components/ProjectList/Project'

interface Props {
    projects: Project[]
}

const Featured = ({ projects }: Props) => {
    const [isMobile, setIsMobile] = React.useState<boolean>(true)

    return (
        <Section id='projects'>
            <motion.div className='section-container flex flex-col gap-8 md:gap-12'>
                <NumberedHeading index={2}>Some Things I&apos;ve Built</NumberedHeading>
                <ProjectList>
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            project={project}
                            reverseLayout={(index + 1) % 2 === 0}
                            isMobile={isMobile}
                        />
                    ))}
                </ProjectList>
            </motion.div>
        </Section>
    )
}

export default Featured
