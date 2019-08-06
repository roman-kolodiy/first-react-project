import React from 'react';
import s from './profile.module.css'
import MyPosts from "./myPosts/myPosts";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <MyPosts {...props}/>
    </div>
};

export default Profile;