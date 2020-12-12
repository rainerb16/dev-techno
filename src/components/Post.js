import React from 'react';
import marked from 'marked';
import '../App.css';

const Post = ({post}) => {
    console.log(post)
    const {title, featuredImage, blogContent} = post.fields
    const postContent = marked(blogContent);

    return (
        <div className='post'>
            <h2 className='title'>{title}</h2>
            <div className='content-container'>
                {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={title} title={title}/>}
                <article dangerouslySetInnerHTML={{ __html: postContent }} />
            </div>
        </div>
    )
}

export default Post
