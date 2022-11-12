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
    const { external, title, tech, github, cover, blurData } = frontmatter

    return (
        <li className={`relative hidden sm:grid grid-cols-12 gap-[0.625rem] items-center`}>
            <div
                // prettier-ignore
                className={`relative row-start-1 row-end-2 rounded border-2 border-[#4a4b4d] hover:border-hero transition ease-in-out duration-500 overflow-hidden 
                ${reverseLayout ? 'col-start-6 col-end-13' : 'col-start-1 col-end-8'}`}
            >
                <Link
                    href={external}
                    rel='noreferrer'
                    target='_blank'
                >
                    <Image
                        layout='responsive'
                        width={2400}
                        height={1600}
                        src={cover}
                        placeholder='blur'
                        blurDataURL={blurData}
                        alt={title}
                        className='grayscale-[60%] hover:grayscale-0 brightness-75 hover:brightness-100 transition ease-in-out duration-500'
                    />
                </Link>
            </div>

            <div
                // prettier-ignore
                className={`relative row-start-1 row-end-2 flex flex-col gap-4
                ${reverseLayout ? 'col-start-1 col-end-7 text-left' : 'col-start-7 col-end-13 text-right'}`}
            >
                <h3
                    // prettier-ignore
                    className={`text-hero text-sm font-mono`}
                >
                    Featured Project
                </h3>
                <h2
                    // prettier-ignore
                    className={`text-2xl font-semibold hover:text-hero transition ease-in-out duration-500`}
                >
                    <Link href={external}>{title}</Link>
                </h2>
                <p
                    className={`text-sm bg-bgMainLight p-6 my-2 rounded drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]`}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
                <ul
                    className={`flex text-sm gap-4 font-mono ${
                        reverseLayout ? 'justify-start' : 'justify-end'
                    }`}
                >
                    {tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div
                    // prettier-ignore
                    className={`flex gap-4 ${reverseLayout ? 'justify-start' : 'justify-end'}`}
                >
                    <Link
                        href={github}
                        rel='noreferrer'
                        target='_blank'
                    >
                        <Github styles={'md:h-[20px] md:w-[20px]'} />
                    </Link>
                    <Link
                        href={external}
                        rel='noreferrer'
                        target='_blank'
                    >
                        <External styles={'md:h-[20px] md:w-[20px]'} />
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default DesktopUI
