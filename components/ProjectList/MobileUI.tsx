import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, External } from 'components/icons'
import { motion } from 'framer-motion'
import { scrollFade20 } from 'styles/framerAnimations'

interface Props {
    project: Project
}

const MobileUI = ({ project }: Props) => {
    const { frontmatter, content } = project
    const { external, title, tech, github, coverMob } = frontmatter

    return (
        <motion.li
            {...scrollFade20}
            className={`sm:hidden relative w-[90vw] h-[90vw] rounded-lg overflow-hidden drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] flex justify-center`}
        >
            <Link
                href={external}
                rel='noreferrer'
                target='_blank'
                className={`absolute top-0 left-0 w-full h-full -z-1 object-contain`}
            >
                <Image
                    className={`grayscale-[50%] blur-sm`}
                    fill={true}
                    src={coverMob}
                    alt={title}
                />
                <div className={`absolute top-0 left-0 w-full h-full bg-[#303235] opacity-[92%]`} />
            </Link>

            <div className={`relative flex flex-col justify-between overflow-hidden p-7`}>
                <h3 className={`font-mono text-hero text-sm`}>Featured Project</h3>
                <h2 className={`font-semibold text-xl text-[#fafafb]`}>
                    <Link href={external}>{title}</Link>
                </h2>
                <p
                    className={`text-sm text-[#eaebef]`}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <ul className={`flex flex-wrap gap-x-4 gap-y-2 overflow-hidden text-[#aaabad]`}>
                    {tech.map((tech, index) => (
                        <li
                            className={`text-sm whitespace-nowrap`}
                            key={index}
                        >
                            {tech}
                        </li>
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
                        <Github styles={`fill-[#aaabad]`} />
                    </Link>
                    <Link
                        href={external}
                        rel='noreferrer'
                        target='_blank'
                    >
                        <External styles={`fill-[#aaabad]`} />
                    </Link>
                </div>
            </div>
        </motion.li>
    )
}

export default MobileUI
