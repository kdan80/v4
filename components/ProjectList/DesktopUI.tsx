import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, External } from 'components/icons'

interface Props {
    project: Project
    reverseLayout: boolean
}

const DesktopUI = ({ project, reverseLayout }: Props) => {
    const { frontmatter, content } = project
    const { external, title, tech, github, cover } = frontmatter

    return (
        <li className={``}>
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

            <div className={``}>
                <h3>Featured Project</h3>
                <h2>
                    <Link href={external}>{title}</Link>
                </h2>
                <p
                    className={``}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <ul className={``}>
                    {tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div
                    // prettier-ignore
                    className={`flex gap-4`}
                >
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

export default DesktopUI
