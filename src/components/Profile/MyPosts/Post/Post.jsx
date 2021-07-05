import React from 'react';
import s from './Post.module.css';
import deleteBtn from './../../../../assets/images/trash.svg';

const Post = ({message, likeCount, deletePost, id}) => {

    const deletePostOnClick = (postId) => {
        deletePost(postId);
    }

    return (
        <div className={s.item}>
            <div className={s.item_content}>
                <div className={s.item_text}>
                    <img alt="post-img"
                         className={s.avatar}
                         src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXsLeJKDYJHrXLzatUHAKE1WFxzn0jcuuG3g&usqp=CAU'/>
                    <div className={s.post_text}>
                        {message}
                    </div>
                </div>
                <img className={s.item_delete} src={deleteBtn} onClick={() => deletePostOnClick(id)}/>
            </div>
            <div className={s.about_like}>
                <img alt="like-img" className={s.like}
                     src='https://lh3.googleusercontent.com/i0mKBU9rHdZX1UOb6OOGIQ3HJweX2__QGYUW8bzaiVfg32KaXdPoDLnvcFfrhFHjYIQ'/>
                <span>Like</span> {likeCount}
            </div>
        </div>
    );
}

export default Post;