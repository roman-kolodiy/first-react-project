import React from 'react';
import s from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    )
};

export default ProfileInfo;