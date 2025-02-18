export type Categories = string;

export type Post = {
	title: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
	thumnail: string;
	slug: string;
};
