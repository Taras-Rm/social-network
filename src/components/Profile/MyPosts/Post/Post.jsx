import React from 'react';
import s from './Post.module.css';

const Post = ({message, likeCount}) => {

    return (
        <div className={s.item}>
            <div className={s.img_text}>
                <img alt="post-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXsLeJKDYJHrXLzatUHAKE1WFxzn0jcuuG3g&usqp=CAU' />
                <div className={s.post_text}>
                    {message}
                </div>
            </div>
            <div className={s.about_like}>
                <img alt="like-img" className={s.like} src='https://lh3.googleusercontent.com/i0mKBU9rHdZX1UOb6OOGIQ3HJweX2__QGYUW8bzaiVfg32KaXdPoDLnvcFfrhFHjYIQ' />
                <span>Like</span> {likeCount}
            </div>
        </div>
    );
}

export default Post;