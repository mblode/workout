const screenSizes = { xs: 520, sm: 640, md: 768, lg: 992, xl: 1200 };

module.exports = {
    purge: ['./public/**/*.html', './src/**/*.js'],
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        screens: {
            // Basic min-width breakpoints (mobile-first)
            xs: `${screenSizes.xs}px`,
            sm: `${screenSizes.sm}px`,
            md: `${screenSizes.md}px`,
            lg: `${screenSizes.lg}px`,
            xl: `${screenSizes.xl}px`,

            // Desktop-first breakpoints
            'to-sm': { max: `${screenSizes.sm}px` },
            'to-md': { max: `${screenSizes.md}px` },
            'to-lg': { max: `${screenSizes.lg}px` },

            // Single breakpoints
            'sm-only': { min: `${screenSizes.sm}px`, max: `${screenSizes.md - 1}px` },
            'md-only': { min: `${screenSizes.md}px`, max: `${screenSizes.lg - 1}px` },
            'lg-only': { min: `${screenSizes.lg}px`, max: `${screenSizes.xl - 1}px` },
        },
        colors: {
            transparent: 'transparent',

            black: '#000',
            white: '#fff',

            gray: {
                100: '#f5f6f7',
                200: '#edf2f7',
                300: '#e2e8f0',
                400: '#cbd5e0',
                500: '#716e81',
                600: '#6c6c72',
                700: '#575964',
                800: '#303134',
                900: '#232323',
            },
            blue: {
                800: '#1e2a3f',
                900: '#1f1c2f',
            },
            orange: {
                400: '#F98F7B',
                500: '#f6806a',
                600: '#fb6f5f',
            },
            green: {
                500: '#5DD59F',
                600: '#52BE90',
            },
        },
        fontFamily: {
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
        },
    },
    corePlugins: {},
    plugins: [],
};
