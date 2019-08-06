import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";

let dataPosts = [
    {id: 1, text: 'Привет', likes: 12},
    {id: 2, text: 'Как дела?', likes: 5},
    {id: 3, text: 'Заебись, братан', likes: 50},
    {ia: 4, text: 'Четко!', likes: 11}
];

let messages = dataPosts.map((key) => {
    return (
        <Post id={key.id} message={
            key.text} likes={key.likes}/>
    )
});


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="Please, enter the text">

                    </textarea>
                </div>
                <div className={s.buttonSend}>
                    <button>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                {messages}
            </div>
        </div>
    )
};

export default MyPosts;