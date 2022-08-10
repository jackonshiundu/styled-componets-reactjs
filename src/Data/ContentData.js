import Deal from '../Assets/illustration.svg'
import Connection from '../Assets/Connection.svg'
import ChartUp from '../Assets/Connection.svg'

export const ContentOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Founded in 2012',
	},
	headline: "We've been in business for 9 years",
	description: 'We have designed and implemented the best cloud security solutions',
	buttonLabel: 'Find More',
	imgStart: 'start',
	img:'../Assets/illustration.svg',
	start: 'true',
};

export const ContentTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Designed & Developed',
	},
	headline: 'The best practices',
	description: 'Our clients have had the best experience working with us',
	buttonLabel: 'View Project',

	linkTo: '/more',
	imgStart: 'start',
	img: {Connection},
	start: 'true',
};

export const ContentThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why us? ',
	description:
		'Our 9 year experience have allowed us to use the most innovative technologies and methodologies',
	buttonLabel: 'View Project',

	linkTo: '/download',
	imgStart: '',
	img:{ChartUp},
	start: 'true',
};