import React from 'react';
import s from './post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" alt=""/>
            {props.message}
            <div>
                <span>Lukas</span>
                <span>{props.likes}</span>
            </div>
        </div>
    )
};

export default Post;