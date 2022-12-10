/// <reference types="nativewind/types" />
module.exports = {
	content: ["./App/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rounded: ["Nunito"],
				mono: ["monospace"],
				menlo: ["Menlo-Regular"],
			},
		},
	},
	plugins: [],
};
