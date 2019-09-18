import React from 'react';
import userPhoto from '../../assets/images/user.png';
import styles from './Users.module.css';
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";


const Users = (props) => {
    let pagesCount = props.totalUsersCount / props.pageSize;
    let pages = [];
    for (let i = 1; i <= Math.ceil(pagesCount); i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {pages.map((p, i) => {
                return <span
                    key={i}
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}
                             alt=''/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                followAPI.unfollowUser(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                                    .catch(err => console.log(err))
                                ;
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                followAPI.followUser(u.id)
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                                    .catch(err => console.log(err))
                                ;
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;