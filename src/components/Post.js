import React from 'react';
import '../App.css';

const Post = ({post}) => {
    console.log(post)
    const {title, featuredImage, blogContent} = post.fields
    return (
        <div className='post'>
            <h2 className='title'>{title}</h2>
            <div className='content-container'>
                {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={title} title={title}/>}
                <article>
                    {blogContent}
                </article>
            </div>
        </div>
    )
}

export default Post
