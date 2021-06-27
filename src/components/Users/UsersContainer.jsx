import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccess,
    unfollowSuccess,
    getUsers,
    toggle_following_proc,
    follow,
    unfollow,
} from '../../redux/users-reducer';
import {
    getIsFetching,
    getIsFollowingProc,
    getPageNumber,
    getTotalUsersCount,
    getUsersCount,
    getUsersPage,
} from '../../redux/users-selectors';

import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

// Library React-Redux (mapStateToProps dispatch connect())

class UsersContainerAPI extends React.Component {
    componentDidMount() {
        let {pageNumber, usersCount} = this.props;
        this.props.getUsers(pageNumber, usersCount);
    }

    // зміна номеру сторінки з юзерами
    pageChanged = (pageNumber) => {
        let {usersCount} = this.props;
        this.props.getUsers(pageNumber, usersCount);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}

                <Users {...this.props}
                       pageChanged={this.pageChanged}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersPage(state),
        pageNumber: getPageNumber(state),
        usersCount: getUsersCount(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        isFollowingProc: getIsFollowingProc(state),
    };
};

export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    toggle_following_proc,
    getUsers,
    follow,
    unfollow,
})(UsersContainerAPI);
