import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../redux/header-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    // перевірка на те чи користувач авторизований
    //this.props.authAutorize();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isLogined: state.auth.isLogined,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  //authAutorize,
  logout,
})(HeaderContainer);
