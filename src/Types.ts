export interface Post {
	username: string;
	name: string;
	alignment: string;
	magnitude: number;
	location: string;
	date: string;
	text: string;
	listeningTo?: string;
	feeling?: string;
	attachment?: string;
}
