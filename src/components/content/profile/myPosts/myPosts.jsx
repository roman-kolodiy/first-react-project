import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";
import ButtonTextarea from "../../../common components/button+textarea/button-texarea";



const MyPosts = (props) => {

    let posts = props.dataPosts.map((data, index) => <Post key={index} id={data.id} message={data.text} likes={data.likes}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <ButtonTextarea/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;