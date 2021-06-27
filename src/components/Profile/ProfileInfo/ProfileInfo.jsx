import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({activeProfile, status, updateUserStatus}) => {
    if(!activeProfile) {
        return <Preloader />
    }

    return (
        <div className={s.profile_block}>
            <div>
                <img className={s.walpaper} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHnHamnGAQO6byapKIZIp-6TZNYZksh2x3MQ&usqp=CAU" alt="phon-nature"></img>
            </div>
            <div className={s.profile_description}>
                <img className={s.avatar} src={activeProfile.photos.small} alt="ava"></img>
                <div className={s.profile_info}>
                    <span>{!activeProfile ? 'Tom K.' : activeProfile.fullName}</span>
                    <p>Date of Birth: 2 january<br />City:Minsk<br />Education: 11<br />Web-site: fhdsjfhdjfh</p>
                </div>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
            </div>
        </div>);
}

export default ProfileInfo;