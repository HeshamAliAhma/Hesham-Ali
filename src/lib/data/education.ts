import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: "Mastering JavaScript Course",
		description: "A detailed course on JavaScript by Osama Elzero, covering fundamental and advanced JavaScript concepts.",
		location: "Online",
		logo: Assets.JavaScript,
		name: "Mastering JavaScript",
		organization: "Osama Elzero",
		period: { "from": new Date(2024, 0, 1), "to": new Date(2024, 4, 31) },
		shortDescription: "A comprehensive course on JavaScript taught by Osama Elzero, covering core and advanced topics.",
		slug: "mastering-javascript-course",
		subjects: ["JavaScript"]
	},
	{
		degree: "Mastering Frontend Engineer Course",
		description: "A comprehensive course covering various technologies including React, Tailwind CSS, and TypeScript.",
		location: "Online",
		logo: Assets.ReactJs,
		name: "Mastering Frontend Engineer",
		organization: "Self-Study",
		period: { "from": new Date(2024, 0, 1), "to": new Date(2024, 7, 31) },
		shortDescription: "A course on frontend development with a focus on React, Tailwind CSS, and TypeScript.",
		slug: "mastering-frontend-course",
		subjects: ["React", "Tailwind CSS", "TypeScript", "Frontend Development"]
	}
];

export const title = 'Education';
