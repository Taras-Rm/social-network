import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/header-reducer';
import { maxLengthCreator, requiredField } from '../../utils/validators/validator';
import { Input } from '../common/FormsControls/FormsControls';
import style from './Login.module.css';

let maxLength25 = maxLengthCreator(25);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'email'}
          placeholder={'email'}
          validate={[requiredField, maxLength25]}
          component={Input}
        />
      </div>
      <div>
        <Field
          name={'password'}
          placeholder={'password'}
          validate={[requiredField, maxLength25]}
          component={Input}
        />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
      </div>
      {props.error && <div className={style.incorectData}>{props.error}</div>}
      <button type={'submit'}>Login</button>
    </form>
  );
};

// контейнер redux-form
let ReduxLoginForm = reduxForm({
  form: 'login',
})(LoginForm);

const Login = (props) => {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
  };

  if (props.isLogined) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isLogined: state.auth.isLogined,
  };
};

export default connect(mapStateToProps, { login })(Login);
