import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";
import ButtonTextarea from "../../../common components/button+textarea/button-texarea";



const MyPosts = (props) => {
    let folderArea = 'profilePage';
    let posts = props.appData.profilePage.dataPosts.map((data, index) => <Post key={index} id={data.id} message={data.text} likes={data.likes}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <ButtonTextarea {...props} folderArea={folderArea}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;