import React from 'react';
import './index.css';

class Login extends React.Component {
	render() {
    const email = this.props.email;
    const password = this.props.password;
    return (
      <div className="auth-page">
        I am login page
      </div>
    );
  }
}


export default Login