import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader";
import statusYes from "../../../assets/images/yes.png"
import statusNo from "../../../assets/images/no.png"


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.data.photos.small} alt='gg'/>
                <div>
                    <div>
                        <div>STATUS</div>
                        <div>{props.profile.data.aboutMe}</div>
                    </div>
                    <div>
                        <div>CONTACTS</div>
                        <div>{props.profile.data.contacts.instagram}</div>
                    </div>
                    <div>
                        <div>LOOKING FOR A JOB</div>
                        <img src={props.profile.data.lookingForAJob ? statusYes : statusNo} alt=''/>
                    </div>
                    <div>
                        <div>LOOKING FOR A JOB DESCRIPTION</div>
                        <div>{props.profile.data.lookingForAJobDescription}</div>
                    </div>
                    <div>
                        <div>FULL NAME</div>
                        <div>{props.profile.data.fullName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;