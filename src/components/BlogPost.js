import React from 'react';

const BlogPost = (props) => {
    const { post } = props;

    return (
        <div>
            <h1>{post.title}</h1>
        </div>
    );
};

export default BlogPost;