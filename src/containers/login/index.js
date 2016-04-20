import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import './style.scss';
import { loginUser, signupUser } from '../../actions/login.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSignup = this.onSignup.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const creds = {
      email: this.props.data.email.value,
      pass: this.props.data.pass.value

    };

    this.props.loginUser(creds, this.props.dispatch);
    this.props.resetForm();
  }

  onSignup(e) {
    console.log(this);
    e.preventDefault();
    const creds = {
      email: this.props.data.email.value,
      pass: this.props.data.pass.value

    };

    this.props.signupUser(creds, this.props.dispatch);
    this.props.resetForm();
  }

  render() {
    const { fields: { email, pass } } = this.props;
    return (
        <div className="middle valign-wrapper">
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="input-field">
              <input type="text" className="validate form-control" {...email} />
              <label htmlFor="icon_prefix">Email</label>
            </div>
            <div className="input-field">
              <input type="password" className="validate form-control" {...pass} />
              <label htmlFor="icon_telephone">Password</label>
            </div>
            <div className="center-align login-buttons">
            <button onClick={this.onSignup} className="btn waves-effect waves-light">
              SignUP
              <i className="fa fa-info fa-2x fa-spin right"></i>
            </button>
            <button onClcik={this.onLogin} className="btn waves-effect waves-light">
              Login
              <i className="fa fa-info fa-2x fa-spin right"></i>
            </button>
            </div>
          </form>
        </div>
    );
  }
}

Login.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  resetForm: PropTypes.func,
  loginUser: PropTypes.func,
  dispatch: PropTypes.func,
  onSignup: PropTypes.func,
  onLogin: PropTypes.func,
  signupUser: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.form.login
  };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'pass']
}, mapStateToProps, { loginUser, signupUser })(Login);