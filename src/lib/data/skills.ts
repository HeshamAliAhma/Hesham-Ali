import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			"JavaScript is a versatile, high-level programming language that is widely used for adding interactivity and dynamic behavior to web pages. It is an essential technology for front-end development, alongside HTML and CSS, and is supported by all modern web browsers. JavaScript enables developers to create responsive and engaging user interfaces, handle events, and perform asynchronous operations. Its extensive ecosystem and frameworks, such as React and Node.js, make it a powerful tool for both client-side and server-side development.",
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			"TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It introduces optional static types and modern JavaScript features to improve code quality and maintainability. TypeScript provides enhanced tooling, such as type inference, interfaces, and generics, which helps catch errors early and facilitates better code organization. It integrates seamlessly with existing JavaScript code and libraries, making it a popular choice for large-scale applications and complex projects.",
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			"CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of web pages written in HTML. It controls the design, colors, fonts, spacing, and overall look of web content. CSS allows developers to separate content from design, enabling more flexible and maintainable code. With features like responsive design, animations, and transitions, CSS enhances user experience by providing a visually appealing and interactive web experience.",
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			"HTML (Hypertext Markup Language) is the standard markup language used to create and design web pages and applications. It provides the basic structure for web content by defining elements such as headings, paragraphs, links, images, and other media. HTML is the backbone of web development, enabling browsers to interpret and render text, multimedia, and other elements on the web. With its straightforward syntax and extensive support, HTML forms the foundation for creating accessible and structured web content.",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			"Sass (Syntactically Awesome Style Sheets) is a popular CSS preprocessor that extends the capabilities of CSS with features like variables, nested rules, and mixins. It allows developers to write more maintainable and modular stylesheets by providing advanced functionality such as inheritance and mixins. Sass compiles down to standard CSS, which can be used in any web project. It helps streamline the development process and improves the readability and organization of CSS code.",
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			"React JS is a powerful JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive user experience. Developed by Facebook, React allows developers to create reusable UI components that update efficiently in response to data changes. It employs a virtual DOM to optimize rendering and enhance performance. With its strong community support and extensive ecosystem, React is widely used for its simplicity, flexibility, and scalability in modern web development.",
		logo: Assets.ReactJs,
		name: 'React JS',
		category: 'library'
	})	
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
