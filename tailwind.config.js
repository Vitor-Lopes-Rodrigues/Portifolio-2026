/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--bg-primary)",
                secondary: "var(--text-secondary)",
                tertiary: "var(--bg-tertiary)",
                "neon-purple": "var(--accent-main)",
                "neon-cyan": "var(--accent-sub)",
                white: "var(--text-primary)",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
}