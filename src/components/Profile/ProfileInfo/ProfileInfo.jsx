import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({activeProfile, status, updateUserStatus, isOwner, updateUserPhoto}) => {
    if(!activeProfile) {
        return <Preloader />
    }

    const updatePhoto = (e) => {
        if(e.target.files.length) {
            updateUserPhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profile_block}>
            <div>
                <img className={s.walpaper} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHnHamnGAQO6byapKIZIp-6TZNYZksh2x3MQ&usqp=CAU" alt="phon-nature"></img>
            </div>
            <div className={s.profile_description}>
                <div className={s.avatarBox}>
                    <img className={s.avatar} src={activeProfile.photos.small} alt="ava"></img>
                    {isOwner && <input className={s.avatar_upload} type="file" onChange={updatePhoto}/>}
                </div>
                <div className={s.profile_info}>
                    <span>{!activeProfile ? 'Tom K.' : activeProfile.fullName}</span>
                    <div>Profile data</div>
                </div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>);
}

export default ProfileInfo;