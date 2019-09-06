import React from 'react'
import s from './Users.module.css'
import * as axios from "axios";
import avatar from '../../img/user.png';

class Users extends React.Component {
    // constructor(props){
    //     super(props);
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(res => {
    //             this.props.setUsers(res.data.items);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    componentDidMount() {
        alert('didMount');
        if(this.props.usersList.length === 0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    this.props.setUsers(res.data.items);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    componentDidUpdate() {
        alert('didUpdate');
    }

    componentWillUnmount(){
        alert('willUnmount')
    }

    render() {
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.usersList.map(user => {
                            let buttonValue = user.followed === true ? 'Follow' : 'Unfollow';
                            return (
                                <div className={s.fullInfo} key={user.id}>
                                    <div className={s.avatarBlock}>
                                        <img src={user.photos.small !== null ? user.photos.small : avatar} alt=''/>
                                        <button
                                            onClick={user.followed === true ? () => this.props.unfollowUser(user.id) : () => this.props.followUser(user.id)}
                                            value={buttonValue}>
                                            {buttonValue}
                                        </button>
                                    </div>
                                    <div className={s.infoBlock}>
                                        <div>
                                            <div>{user.name}</div>
                                            <div>{user.status}</div>
                                        </div>
                                        <div>
                                            <div>{"user.location.country"}</div>
                                            <div>{"user.location.city"}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>

        )
    }
}

export default Users