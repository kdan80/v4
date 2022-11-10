import React from 'react'

interface Props {
    children: React.ReactNode
}

const Project = ({ children }: Props) => {
    return <div>{children}</div>
}

export default Project

{
    /* <Project
key={index}
{...scrollFade20}
>
<div className='project-content'>
    <div>
        <p className='project-overline'>Featured Project</p>

        <h3 className='project-title'>
            <a href={external}>{title}</a>
        </h3>

        <div
            className='project-description'
            dangerouslySetInnerHTML={{ __html: content }}
        />

        {tech.length && (
            <ul className='project-tech-list'>
                {tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        )}

        <div className='project-links'>
            {github && (
                <a
                    href={github}
                    aria-label='GitHub Link'
                    rel='noreferrer'
                    target='_blank'
                >
                    <Github />
                </a>
            )}
            {external && (
                <a
                    href={external}
                    aria-label='External Link'
                    rel='noreferrer'
                    target='_blank'
                >
                    <External />
                </a>
            )}
        </div>
    </div>
</div>

<div className='project-image'>
    <a
        href={external ? external : github ? github : '#'}
        rel='noreferrer'
        target='_blank'
    >
        <Image
            layout='responsive'
            objectFit='cover'
            width={2400}
            height={1600}
            src={cover}
            placeholder='blur'
            blurDataURL={cover}
            alt={title}
            className='img'
        />
    </a>
</div>
</Project> */
}
