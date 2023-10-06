/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				'light-red': 'rgba(255, 87,87, 0.1)',
                'my-red': 'rgba(255, 87,87, 1)',
				'gold-yellow': 'rgba(255,176,31, 1)',
                'my-gold-yellow': 'rgba(255,176,31, 0.1)',
				'green-teal': 'rgba(0, 189, 145, 1)',
                'my-green-teal': 'rgba(0, 189, 145, 0.1)',
				'cobalt-blue': 'rgba(17, 37, 212, 1)',
                'my-cobalt-blue': 'rgba(17, 37, 212, 0.1)',
				'light-slate-blue': 'hsl(252, 100%, 67%)',
				'light-royal-blue': 'hsl(241, 81%, 54%)',
				'violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
				'persian-blue-circle': 'rgba(29, 37, 165, 0.3)',
				'pale-blue': 'hsl(221, 100%, 96%)',
				'light-lavender': 'hsl(241, 70%, 80%)',
				'dark-gray-blue': 'hsl(224, 30%, 27%)',
			},
			height: {
				450: '450px',
			},
			fontFamily: {
				custom: ['Hanken Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
