/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                'sidebar-bg': '#1E2228',
                bg: '#111317',
                'brand-purple': '#C678DD',
                // 'brand-purple-bg': '#C678DD',
                'brand-purple-bg': '#52D0D2',
                'brand-teal': '#52D0D2',
                'secondary-text': '#91A3AE',
                'sub-headline-text': '#848484',
                'brand-blue': '#62AFEE',
                'brand-yellow': '#E5BF7B',
                'brand-red': '#DF6C75',
            },
        },
    },
    plugins: [],
}
