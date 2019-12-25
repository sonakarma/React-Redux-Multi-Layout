import React from 'react';
import './index.css';

class Home extends React.Component {
	render() {
    const email = this.props.email;
    const password = this.props.password;

    console.log('Home Page')
    return (
      <div className="auth-page">
        I am home page
      </div>
    );
  }
}


export default Home;