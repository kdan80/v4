/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{html,js,ts,jsx,tsx}',
        './components/**/*.{html,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                img: "url('/images/background.webp')",
            },
        },
    },
    plugins: [],
}
