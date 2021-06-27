import React, {Suspense} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';


import {initialize} from './redux/app-reducer';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";

// React.lazy()
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar store={this.props.store}/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userID?" render={withSuspense(ProfileContainer)}/>
                    <Route exact path="/dialogs" render={withSuspense(DialogsContainer)} />

                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    };
};

const AppWithConnect = connect(mapStateToProps, {initialize})(App);

const MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppWithConnect/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp;