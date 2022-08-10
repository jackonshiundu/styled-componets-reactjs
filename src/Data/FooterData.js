import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaDiscord, FaDribbble, FaTiktok, FaSnapchat, FaTelegram } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		icon: iconStyle(FaFacebook),
	},
	{
		icon: iconStyle(FaInstagram),
	},
	{
		icon: iconStyle(FaYoutube),
	},
	{
		icon: iconStyle(FaTwitter),
	},
	{
		icon: iconStyle(FaLinkedin),
	},
	{
		icon: iconStyle(FaDiscord),
	},
	{
		icon: iconStyle(FaDribbble),
	},
	{
		icon: iconStyle(FaTiktok),
	},
	{
		icon: iconStyle(FaSnapchat),
	},
	{
		icon: iconStyle(FaTelegram),
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];