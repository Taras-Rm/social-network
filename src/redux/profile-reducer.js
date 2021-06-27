import {dataAPI, profileAPI} from './../api/api';

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/GET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hello everyone!', likeCount: 15},
        {id: 2, message: 'I can swimming!!!', likeCount: 20},
        {id: 3, message: 'I am happy!!!', likeCount: 18},
        {id: 4, message: 'I like travelling!!!', likeCount: 35},
        {id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 30},
        {id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 31},
        {id: 10, message: 'I likkkk kkkkkkk', likeCount: 1},
    ],

    activeProfile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.postId)
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                activeProfile: action.userProfile,
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

export const addPost = (postText) => {
    return {type: ADD_POST, postText};
};

export const deletePost = (postId) => {
    return {type: DELETE_POST, postId};
};

export const setUserProfile = (userProfile) => {
    return {type: SET_USER_PROFILE, userProfile};
};

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status};
};

//////////////////////////////////////////////////////

// отримати інформацію про користувача
export const getUserProfileInfo = (userId) => async (dispatch) => {
    let response = await dataAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));

};

// отримати статус користувача
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response));
};

// оновити статус користувача (авторизованого)
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response === 0) {
        dispatch(setUserStatus(status));
    }
};

export default profileReducer;
