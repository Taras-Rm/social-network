import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {
    addPost,
    getUserProfileInfo,
    getUserStatus, updateUserPhoto,
    updateUserStatus,
} from '../../redux/profile-reducer';
import {withRouter} from 'react-router';
import {compose} from 'redux';

class ProfileContainerAPI extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userID;
        if (!userId) {
            userId = this.props.id;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        // завантажити інформацію користувача
        this.props.getUserProfileInfo(userId);

        // завантажити статус користувача
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userID !== this.props.match.params.userID) {
           this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userID} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        activeProfile: state.profilePage.activeProfile,
        status: state.profilePage.status,
        id: state.auth.id
    };
};

export default compose(
    connect(mapStateToProps, {addPost, getUserProfileInfo, getUserStatus, updateUserStatus, updateUserPhoto
        }),
    withRouter,
)(ProfileContainerAPI);
