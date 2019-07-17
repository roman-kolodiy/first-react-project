import React from 'react';
import s from './profile.module.css'
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' alt=''/>
            </div>
            <div>
                ava+desc
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;