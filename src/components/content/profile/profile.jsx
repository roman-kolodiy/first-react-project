import React from 'react';
import s from './profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg' alt=''/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                mypost
                <div>
                    newpost
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;