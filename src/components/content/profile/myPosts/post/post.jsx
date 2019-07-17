import React from 'react';
import s from './post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt="" />
            post 1
            <div>
                <span>Lukas</span>
            </div>
        </div>
    )
};

export default Post;