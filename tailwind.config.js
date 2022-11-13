/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./pages/**/*.{html,js,ts,jsx,tsx}', './components/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                hero: '#13d5bb',
                heroHover: '#11aa951a',
                main: '#e0e2ed',
                mainDarker: '#99a0a4',
                bgMainLight: 'rgb(38, 39, 42)',
                dropdownNav: 'rgba(48, 49, 54,.6)',
                header: 'rgba(28,29,34, .95)',
                light: {
                    100: '#fafbff',
                    200: '#f0f2f6',
                    300: '#eaebef',
                    400: '#e0e2e4',
                    500: '#dadbdf',
                    600: '#d0d2d4',
                    700: '#cacbcf',
                    800: '#c0c2c4',
                    900: '#babbbf',
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
            screens: {
                xs: '540px',
            },
        },
    },
    plugins: [],
}
