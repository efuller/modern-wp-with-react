import React from 'react';
import { Link } from 'react-router';


function PostCard({categoryPost}) {
	return (
		<article className="bt bb b--black-10">
			<Link className="db pv4 ph3 ph0-l no-underline black dim" to={`/story/${categoryPost.slug}`}>
				<div className="flex flex-column flex-row-ns">
					<div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
						<img src={`${categoryPost.thumbnail}`} className="db" />
					</div>
					<div className="w-100 w-60-ns pl3-ns">
						<h1 className="f3 fw1 baskerville mt0 lh-title">{categoryPost.title.rendered}</h1>
						<div className="f6 f5-l lh-copy" dangerouslySetInnerHTML={{__html: categoryPost.excerpt.rendered}}/>
					</div>
				</div>
			</Link>
		</article>
	)
}

const CategoryPage = ({ currentCategory, categoryPosts }) => {
	return (
		<div>
			<h2 className="baskerville fw1 ph3 ph0-l f2 tc">{`Category: ${currentCategory.name}`}</h2>
			{categoryPosts.map((categoryPost) => ( <PostCard key={categoryPost.id} categoryPost={categoryPost} />))}
		</div>
	)
};

export default CategoryPage;