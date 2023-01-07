/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
			},
			dropShadow: {
				lg: '0px 0px 15px rgba(0, 0, 0, .3)',
			},
		},
	},
	plugins: [],
}
