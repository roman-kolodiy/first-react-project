import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";

/*
const arr = [1,2,3,4,5,6,7,8,9,10];

const arr2 = arr.map((key)=>{return <Post/>});
*/


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={s.posts}>
                <Post />
            </div>
        </div>
    )
};

export default MyPosts;