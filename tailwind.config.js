/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    500: '#4F46E5',
                    600: '#4338ca',
                    700: '#3730a3',
                    900: '#1e1b4b',
                },
                secondary: '#FACC15',
                neutral: {
                    50: '#F9FAFB',
                    900: '#1F2937',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
