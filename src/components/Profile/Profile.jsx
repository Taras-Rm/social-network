import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({activeProfile, status, updateUserStatus, posts, addPost, deletePost, isOwner, updateUserPhoto, updateUserData}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo activeProfile={activeProfile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} updateUserPhoto={updateUserPhoto} updateUserData={updateUserData} />
            <MyPosts posts={posts}
                addPost={addPost}
            deletePost={deletePost}/>
        </div>);
}

export default Profile;