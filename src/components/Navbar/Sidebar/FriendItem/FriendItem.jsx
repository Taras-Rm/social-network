import React from 'react';
import s from './FriendItem.module.css';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
    return (
        <div className={s.friend_item}>
            <div className={s.avatar} >
                <img alt="friend-img" src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612'></img>
            </div>
            <div>
                <NavLink to='#f'>{props.name}</NavLink>
            </div>

        </div>
    );
}

export default FriendItem;