import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../utils/validators/validator';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Textarea} from './../../common/FormsControls/FormsControls';

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map((post) => (
        <Post deletePost={props.deletePost} message={post.message} likeCount={post.likeCount} id={post.id}/>
    )).reverse();

    let addPost = (values) => {
        props.addPost(values.postText);
    };

    return (

        <div className={s.posts}>
            <h2 className={s.header_posts}>My posts</h2>

            <div className={s.postsBlock}>
                <ReduxAddPostForm onSubmit={addPost}/>
                <div className={s.old_posts}>{postsElements}</div>
            </div>

        </div>)


});

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.new_post}>
            <Field
                type="text"
                name={'postText'}
                validate={[requiredField, maxLength30]}
                placeholder="Write new post in this field..."
                component={Textarea}
                className={s.textarea}
            />

            <button className={s.btn_green}>Add post</button>
        </form>
    );
};

const ReduxAddPostForm = reduxForm({
    form: 'post',
})(AddPostForm);

export default MyPosts;
