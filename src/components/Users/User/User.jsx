import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';

import userAvartar from './../../../assets/images/userAvatar.jpg';

const User = ({userPrep, isFollowingProc, unfollow, follow}) => {
  return (
    <div className={s.user_block}>
      <div className={s.userFirst}>
        <NavLink to={`/profile/${userPrep.id}`}>
          {/*/////////////////*/}
          <img
            alt="avatar"
            className={s.userAvatar}
            src={userPrep.photos.small != null ? userPrep.photos.small : userAvartar}
          />
        </NavLink>
        {userPrep.followed ? (
          <button
            disabled={isFollowingProc.some((id) => id === userPrep.id)}
            onClick={() => {
              unfollow(userPrep.id);
            }}
            className={s.btn}>
            Unfollow
          </button>
        ) : (
          <button
            disabled={isFollowingProc.some((id) => id === userPrep.id)}
            onClick={() => {
              follow(userPrep.id);
            }}
            className={s.btn}>
            Follow
          </button>
        )}
      </div>
      <div className={s.user__info}>
        <div className={s.user__info_left}>
          <h2>
            <span className={s.user__name}>{userPrep.name}</span>
            <span>{userPrep.surname}</span>
          </h2>
          <p className={s.user__status}>{userPrep.status}</p>
        </div>
        <div className={s.user__info_right}>
          <p className={s.user__country}>{/*props.userPrep.location.country*/}</p>
          <p className={s.user__city}>{/*props.userPrep.location.city*/}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
