/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{html,js,ts,jsx,tsx}',
        './components/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                hero: '#13d5bb',
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
        },
    },
    plugins: [],
}
