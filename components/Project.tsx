import React from 'react'
import { scrollFade20 } from 'styles/framerAnimations'
import Link from 'next/link'
import { Github, External } from 'components/icons'
import Image from 'next/image'

interface Props {
    project: Project
    reverseLayout: boolean
}

const Project = ({ project, reverseLayout }: Props) => {
    const { frontmatter, content } = project
    const { external, title, tech, github, cover } = frontmatter

    React.useEffect(() => {
        console.log(`${title}: `, cover)
    }, [cover, title])

    return (
        <li
            className={`border flex items-center ${reverseLayout ? 'flex-row-reverse' : undefined}`}
        >
            <div>
                <Link
                    href={external}
                    rel='noreferrer'
                    target='_blank'
                >
                    <Image
                        width={2400}
                        height={1600}
                        src={cover}
                        placeholder='blur'
                        blurDataURL={cover}
                        alt={title}
                        className='img'
                    />
                </Link>
            </div>

            <div className={`flex flex-col  ${reverseLayout ? 'items-start' : 'items-end'}`}>
                <h3>Featured Project</h3>
                <h2>
                    <Link href={external}>{title}</Link>
                </h2>
                <p
                    className={`${reverseLayout ? 'text-start' : 'text-end'}`}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <ul className={`flex ${reverseLayout ? 'justify-end' : 'justify-start'}`}>
                    {tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div>
                    <Link
                        href={github}
                        rel='noreferrer'
                        target='_blank'
                    >
                        <Github />
                    </Link>
                    <Link
                        href={external}
                        rel='noreferrer'
                        target='_blank'
                    >
                        <External />
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default Project
