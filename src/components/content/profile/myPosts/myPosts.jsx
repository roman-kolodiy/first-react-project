import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";
import ButtonTextareaContainer from "../../../common components/button+textarea/button-texareaContainer";



const MyPosts = (props) => {
    let folderArea = 'profilePage';
    let posts = props.state.profilePage.dataPosts.map((data, index) => <Post key={index} id={data.id} message={data.text} likes={data.likes}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <ButtonTextareaContainer {...props} folderArea={folderArea}/>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
};

export default MyPosts;