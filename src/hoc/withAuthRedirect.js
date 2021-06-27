import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// об'єкт з інформацією про те чи користувач залогінений
const mapStateToPropsForRedirect = (state) => {
    return {
        isLogined: state.auth.isLogined
    }
}

// Хок, який приймає компоненту і повертає модифіковану компоненту. В даному випадку потрібен
// щоб виконувати редірект, якщо користувач не залогінений
const withAuthRedirect = (Component) => {
    class AuthRedirect extends React.Component {
        render () {
            if(!this.props.isLogined) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }       
    }
    // обертаю коннектом, щоб прокинути інформацію про логування
    let withAuthRedirect = connect(mapStateToPropsForRedirect)(AuthRedirect);

    return withAuthRedirect;
}


export default withAuthRedirect;