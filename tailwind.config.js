/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                gray: {
                    100: "#F3F4F6"
                }
            }
        },
    },
    plugins: [],
}

