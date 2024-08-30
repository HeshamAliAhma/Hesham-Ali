import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Hesham';

export const lastName = 'Ali';

export const description =
'I’m Hesham Ali from Egypt, a Software Engineer specializing in Front-End development with one year of experience in web development and design.'
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/HeshamAliAhma' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/heshamali-programmer/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/27092951/hesham'
	},
	{
		platform: Platform.Email,
		link: 'heshammr.robot@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com/profile.php?id=100019250237479'
	},
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'ts');
