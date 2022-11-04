interface NavLink {
    name: string
    url: string
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
    navLinks: NavLink[]
}

const config: Config = {
    email: 'kierandansey80@gmail.com',

    skills: [
        'HTML',
        'JavaScript (ES6+)',
        'CSS/SASS',
        'React',
        'Next.js',
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
