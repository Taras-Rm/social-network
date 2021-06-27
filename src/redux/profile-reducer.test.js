import React from "react";
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hello everyone!', likeCount: 15 },
        { id: 2, message: 'I can swimming!!!', likeCount: 20 },
        { id: 3, message: 'I am happy!!!', likeCount: 18 },
        { id: 4, message: 'I like travelling!!!', likeCount: 35 },
        { id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 30 },
        { id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 31 },
        { id: 10, message: 'I likkkk kkkkkkk', likeCount: 1 },
    ]
};

it('count of post should be incremented', () => {
    let action = addPost('Hello !!!');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(8);
})

it('likes count should be 0', () => {
    let action = addPost('Hello !!!');

    let newState = profileReducer(state, action);

    expect(newState.posts[7].likeCount).toBe(0);
})

it('count of post should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
})