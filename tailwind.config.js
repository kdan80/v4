/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./pages/**/*.{html,js,ts,jsx,tsx}', './components/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                hero: '#13d5bb',
                heroHover: '#11aa951a',
                heroDark: '#0d9086',
                header: 'rgba(28,29,34, .95)',
                light: {
                    50: '#fafbff',
                    100: '#f0f2f6',
                    200: '#eaebef',
                    300: '#e0e2e4',
                    400: '#dadbdf',
                    500: '#d0d2d4',
                    600: '#cacbcf',
                    700: '#c0c2c4',
                    800: '#babbbf',
                    900: '#b0b2b4',
                },
                medium: {
                    50: '#aaabad',
                    100: '#a0a2a4',
                    200: '#9a9b9d',
                    300: '#909294',
                    400: '#8a8b8d',
                    500: '#808284',
                    600: '#7a7b7d',
                    700: '#707274',
                    800: '#6a6b6d',
                    900: '#606264',
                },
                dark: {
                    50: '#5a5b5d',
                    100: '#505254',
                    200: '#4a4b4d',
                    300: '#404244',
                    400: '#3a3b3d',
                    500: '#303234',
                    600: '#2a2b2d',
                    700: '#202224',
                    800: '#1a1b1d',
                    900: '#101214',
                },
            },
            backgroundImage: {
                img: "url('/images/background.webp')",
            },
            fontFamily: {
                sans: [
                    'Poppins',
                    'Roboto',
                    'Arial',
                    'sans',
                    'sans-serif',
                    defaultTheme.fontFamily.sans,
                ],
                mono: [
                    'SF Mono',
                    'Roboto Mono',
                    'Hack',
                    'mono',
                    'monospace',
                    defaultTheme.fontFamily.mono,
                ],
            },
            fontSize: {
                landingH1: ['clamp(0.875rem, 5vw, 1.125rem)'],
                landingH2: ['clamp(2.5rem, 8vw, 4rem)'],
                contactH2: ['clamp(1.5rem, 5vw, 2.5rem)'],
            },
            gridTemplateColumns: {
                skills: 'repeat(2, minmax(140px, 200px)',
                project: 'repeat(12, 1fr)',
            },
            keyframes: {
                slideInFromLeft: {
                    '0%': { 
                        transform: 'translateX(-100%)', 
                        opacity: 0
                    },
                    '100%': { 
                        transform: 'translateX(0)', 
                        opacity: 1 
                    }
                },
                slideDown: {
                    '0%': { 
                        transform: 'translateY(-100%)', 
                    },
                    '100%': { 
                        transform: 'translateY(0)', 
                    }
                },
            },
            animation: {
                slideInFromLeft: 'slideInFromLeft 300ms ease-in-out',
                slideDown: 'slideDown 250ms ease-in-out',
            },
            screens: {
                xs: '540px',
            },
        },
    },
    plugins: [],
}
