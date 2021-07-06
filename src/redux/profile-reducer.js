import {dataAPI, profileAPI} from './../api/api';
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/GET_USER_STATUS';
const SET_USER_PHOTO = 'profile/SET_USER_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hello everyone!', likeCount: 15},
        {id: 2, message: 'I can swimming!!!', likeCount: 20},
        {id: 3, message: 'I am happy!!!', likeCount: 18},
        {id: 4, message: 'I like travelling!!!', likeCount: 35},
        {id: 5, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 30},
        {id: 6, message: 'I like travelling!!!!!!!!!!!!!!!!!', likeCount: 31},
        {id: 7, message: 'I likkkk kkkkkkk', likeCount: 1},
    ],

    activeProfile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.ceil(Math.random() * 10000),
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
        case SET_USER_PHOTO: {
            return {
                ...state,
                activeProfile: {...state.activeProfile, photos: action.photos},
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

export const setUserPhoto = (photos) => {
    return {type: SET_USER_PHOTO, photos};
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

// оновити фото користувача (авторизованого)
export const updateUserPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.setUserPhoto(file);
    if (response.resultCode === 0) {
        dispatch(setUserPhoto(response.data.photos));
    }
};

// оновити / встановити дані користувача
export const updateUserData = (userData) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.setUserData(userData);
    if(response.resultCode === 0) {
        dispatch(getUserProfileInfo(userId));
    } else {
        let errorText = response.messages[0];
        dispatch(stopSubmit("profileData", {_error: errorText}))
        return Promise.reject(response.messages[0])
    }
}

export default profileReducer;
