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
                dropdownNav: 'rgba(48, 49, 54,.6)',
                header: 'rgba(28,29,34, .95)',
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
            },
        },
    },
    plugins: [],
}
