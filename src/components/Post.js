import React from 'react';
import marked from 'marked';
import '../App.css';

function Post({ post }) {
    console.log(post);
    const { title, featuredImage, content } = post.fields;
    const postContent = marked(content);

    return (
        <div className='post'>
            <h2 className='title'>{title}</h2>
            <div className='content-container'>
                {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={title} title={title} />}
                <article dangerouslySetInnerHTML={{__html: postContent}} />
            </div>
        </div>
    );
}

export default Post;
