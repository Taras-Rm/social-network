import {dataAPI} from '../api/api';
import {followUnfollow} from "../utils/reducers-helper";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_PAGE = 'users/SET_PAGE';
const SET_USERS_COUNT = 'users/SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING = 'users/TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    pageNumber: 1,
    usersCount: 5,
    totalUsersCount: 0,
    isFetching: false,
    isFollowingProc: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: followUnfollow(state.users, action.userId, true)
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: followUnfollow(state.users, action.userId, false)
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users,
            };
        }
        case SET_PAGE: {
            return {
                ...state,
                pageNumber: action.page,
            };
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount,
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                isFollowingProc: action.isFetching
                    ? [...state.isFollowingProc, action.id]
                    : state.isFollowingProc.filter((id) => id !== action.id),
            };
        }
        default:
            return state;
    }
};

export const followSuccess = (id) => {
    return {type: FOLLOW, userId: id};
};

export const unfollowSuccess = (id) => {
    return {type: UNFOLLOW, userId: id};
};

export const set_users = (users) => {
    return {type: SET_USERS, users};
};

export const set_page = (page) => {
    return {type: SET_PAGE, page};
};

export const set_users_count = (usersCount) => {
    return {type: SET_USERS_COUNT, usersCount};
};

export const toggle_is_fetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching};
};

export const toggle_following_proc = (isFetching, id) => {
    return {type: TOGGLE_FOLLOWING, isFetching, id};
};

//////////////////////////////////////////////////////////////// Thunk

export const getUsers = (pageNumber, usersCount) => async (dispatch) => {
    dispatch(toggle_is_fetching(true));
    dispatch(set_page(pageNumber));
    let response = await dataAPI.getUsers(pageNumber, usersCount)
    dispatch(toggle_is_fetching(false));
    dispatch(set_users(response.items));
    dispatch(set_users_count(response.totalCount));
};

// закоментував, бо це запити на сервер (я не проплатив акаунт ще)

export const follow = (userId) => async (dispatch) => {
    dispatch(toggle_following_proc(true, userId));
    //let response = await dataAPI.follow(userId);
    // if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
    // }
    dispatch(toggle_following_proc(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggle_following_proc(true, userId));
    //let response =  await dataAPI.unfollow(userId);
    //  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
    //  }
    dispatch(toggle_following_proc(false, userId));
};

export default usersReducer;
