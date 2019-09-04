import React from 'react'
import s from './Users.module.css'


const Users = (props) => {
    if(props.usersList.length === 0){
        props.setUsers([
            {
                id: 1,
                fullName: 'Roman K.',
                avatar: 'http://www.nretnil.com/avatar/kirk2.jpg',
                followStatus: true,
                status: 'I\'m bad',
                location: {
                    city: 'Kharkov',
                    country: 'Ukraine'
                }
            },
            {
                id: 2,
                fullName: 'Julia B.',
                avatar: 'http://www.nretnil.com/avatar/LawrenceEzekielAmos.png',
                followStatus: false,
                status: 'I\'m good',
                location: {
                    city: 'Kharkov',
                    country: 'Ukraine'
                }
            },
            {
                id: 3,
                fullName: 'Roman K.',
                avatar: 'http://www.nretnil.com/avatar/slevin.jpg',
                followStatus: false,
                status: 'I\'m God',
                location: {
                    city: 'Kharkov',
                    country: 'Ukraine'
                }
            },
            {
                id: 4,
                fullName: 'Julia B.',
                avatar: 'http://www.nretnil.com/avatar/kirk.jpg',
                followStatus: true,
                status: 'I\'m chilly-bombita',
                location: {
                    city: 'Kharkov',
                    country: 'Ukraine'
                }
            }
        ]);
    }
    return (
        <div>
            {
                props.usersList.map(user => {
                        let buttonValue = user.followStatus === true ? 'Unfollow' : 'Follow';
                        return (
                            <div className={s.fullInfo} key={user.id}>
                                <div className={s.avatarBlock}>
                                    <img src={user.avatar} alt=''/>
                                    <button
                                        onClick={user.followStatus === true ? () => props.followUser(user.id) : () => props.unfollowUser(user.id)}
                                        value={buttonValue}>
                                        {buttonValue}
                                    </button>
                                </div>
                                <div className={s.infoBlock}>
                                    <div>
                                        <div>{user.fullName}</div>
                                        <div>{user.status}</div>
                                    </div>
                                    <div>
                                        <div>{user.location.country}</div>
                                        <div>{user.location.city}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default Users