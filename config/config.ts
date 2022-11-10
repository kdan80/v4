import React from 'react'
import { Github, LinkedIn, Codepen } from 'components/icons'

type NavLink = {
    name: string
    url: string
}

type socialLink = {
    url: string
    icon: React.FC
}

interface Config {
    email: string
    skills: string[]
    siteData: {
        title: string
        description: string
        siteUrl: string
        image: string
    }
    socialLinks: socialLink[]
    navLinks: NavLink[]
}

const config: Config = {
    email: 'kierandansey80@gmail.com',

    skills: [
        'HTML',
        'CSS/SASS',
        'Tailwind',
        'JavaScript (ES6+)',
        'React/Next.js',
        'Typescript',
        'Node.js/Express',
        'Python/Django',
        'Linux/Bash',
        'MongoDB',
        'GraphQL',
        'Git',
        'SVG/Inkscape',
    ],

    siteData: {
        title: 'Kieran Dansey',
        description: 'Kieran Dansey freelance web developer',
        siteUrl: 'https://kierandansey.co.uk',
        image: '/images/og.webp',
    },

    socialLinks: [
        {
            url: 'https://github.com/kdan80',
            icon: Github,
        },
        {
            url: 'https://linkedin.com/in/kdansey80',
            icon: LinkedIn,
        },
        {
            url: 'https://codepen.io/kdan80',
            icon: Codepen,
        },
    ],

    navLinks: [
        {
            name: 'About',
            url: '/#about',
        },
        {
            name: 'My Projects',
            url: '/#projects',
        },
        {
            name: 'Contact Me',
            url: '/#contact',
        },
    ],
}

export default config
