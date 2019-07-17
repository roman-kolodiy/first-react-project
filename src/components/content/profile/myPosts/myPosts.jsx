import React from 'react';
import s from './myPosts.module.css'
import Post from "./post/post";

let messagesArr = ['Привет', 'Как дела?', 'Заебись, братан', 'Четко!'];

let messages = messagesArr.map((key) => {
    return (
        <Post key={key} message={
            key}/>
    )
});


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea placeholder="Please, enter the text">

                </textarea>
                <button>Send</button>
            </div>
            <div className={s.posts}>

                {/*<Post message='hi, bro'/>*/}
                {/*<Post message='Hello, Dear'/>*/}

                {messages}
            </div>
        </div>
    )
};

export default MyPosts;