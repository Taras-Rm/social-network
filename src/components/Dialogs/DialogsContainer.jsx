import React from 'react';
import Dialogs from './Dialogs';

import { addMessage } from './../../redux/dialogs-reducer';
import { connect } from 'react-redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
    
}

// it`s compose function from Redux
export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);