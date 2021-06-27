import React from 'react';
import s from './Users.module.css';
import User from './User/User';
import Preloader from '../common/Preloader/Preloader';
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {

    let listOfUsers = props.users.map(u =>
        <User
            follow={props.follow}
            unfollow={props.unfollow}
            isFollowingProc={props.isFollowingProc}
            key={u.id}
            userPrep={u}
        />)

    return (
            <div className={s.user_list}>
                <Paginator pageNumber={props.pageNumber} pageChanged={props.pageChanged}
                           totalItemsCount={props.totalUsersCount} itemsCountOnPage={props.usersCount} countOfPagesOnPage={10}/>
                <div>
                    {listOfUsers}
                </div>

            </div>
    )
}

export default Users;