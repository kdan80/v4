import React from 'react'

import Section from 'components/sections/Section'

import config from 'config/config'
import { motion } from 'framer-motion'
import { scrollFade } from 'styles/framerAnimations'
import NumberedHeading from 'components/NumberedHeading'

// const StyledSection =

//     .container {
//         ${mixins.sectionContentContainer};
//         ${mixins.flexCol};
//     }
;('grid grid-cols-2 gap-2.5 mt-5 overflow-hidden')
//     .skills-list {
//         display: grid;
//         grid-template-columns: repeat(2, minmax(140px, 200px));
//         grid-gap: 0 .625rem;
//         padding: 0;
//         margin: 1.25rem 0 0 0;
//         overflow: hidden;
//         list-style: none;
;('relative mb-2.5 pl-4.5 font-mono text-sm')
//         li {
//             position: relative;
//             margin-bottom: .625rem;
//             padding-left: 1.25rem;
//             font-family: var(--font-mono);
//             font-size: var(--ft-sm);

//             &:before {
//                 content: '▹';
//                 position: absolute;
//                 left: 0;
//                 color: var(--fg-highlight);
//                 font-size: var(--ft-sm);
//                 line-height: .75rem;
//             }
//         }
//     }

//     @media screen and (min-width: 768px){
//         .container {
//             width: 70%;
//         }

//         .skills-list li {
//             font-size: var(--ft-md);

//             &:before {
//                 font-size: var(--ft-md);
//             }
//         }
//     }

const About = () => {
    const { skills } = config

    return (
        <Section id='about'>
            <motion.div className='section-container md:w-[70%] flex flex-col gap-6'>
                <NumberedHeading index={1}>About Me</NumberedHeading>

                <motion.p
                    className='text-lg text-mainDarker'
                    {...scrollFade}>
                    Hello! My name is Kieran and I enjoy creating things that live on the internet.
                    My interest in web development started back in 2005 when I was making custom
                    themes for myspace profiles. Fast-forward to today and I enjoy building
                    full-featured websites and apps using modern design principles and tools.
                </motion.p>

                <motion.p
                    className='text-lg text-mainDarker'
                    {...scrollFade}>
                    I am a self-taught developer from Tayside, Scotland and I am currently looking
                    to secure a position as a junior developer to further my own knowledge and
                    abilities. My ultimate career aspiration is to become a backend, or full-stack
                    engineer, and a project leader.
                </motion.p>

                <motion.p
                    className='text-lg text-mainDarker'
                    {...scrollFade}>
                    Here are some of the tools and technologies that I use;
                </motion.p>

                <motion.ul
                    className='flex flex-col flex-wrap max-w-[600px] max-h-[250px] md:max-h-[200px] gap-2 mt-4'
                    {...scrollFade}>
                    {skills &&
                        skills.map((skill, index) => (
                            <motion.li
                                className='flex items-center gap-1.5 font-mono text-sm md:text-base text-mainDarker w-[200px] '
                                key={index}>
                                <span className='text-hero text-xs'>*</span>
                                <span>{skill}</span>
                            </motion.li>
                        ))}
                </motion.ul>
            </motion.div>
        </Section>
    )
}

export default About
