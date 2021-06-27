import React from 'react';
import s from './Sidebar.module.css';

import FriendItem from './FriendItem/FriendItem';



const Sidebar = (props) => {
    
    let friendsElements = props.friends.map((friend) => <FriendItem id={friend.id} name={friend.name} />)

    return (
        <div className={s.sidebar_block}>
            <h2>Friends</h2>
            <div className={s.friends_block}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Sidebar;