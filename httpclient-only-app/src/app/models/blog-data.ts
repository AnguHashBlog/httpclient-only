export interface ApiResponseBlogPosts {
	data: {
		publication: {
			posts: {
				edges: [
					{
						node: BlogPost;
					}
				];
			};
		};
	};
}

export interface BlogPost {
	slug: string;
	title: string;
	brief: string;
	coverImage: {
		url: string;
	};
}

export interface BlogPostWithContentAndAuthor extends BlogPost {
	publishedAt: string;
	author: {
		name: string;
		profilePicture: string;
	};
	content: {
		html: string;
	};
}

export interface ApiResponseSinglePost {
	data: {
		publication: {
			post: BlogPostWithContentAndAuthor;
		};
	};
}
