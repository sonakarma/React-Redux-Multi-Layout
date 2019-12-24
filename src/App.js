import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import AdminLayout from './layout/adminLayout';


export class App extends Component {
 render(){
 	 return (
	    <div className="App">
	       <Router>
		        <Switch>
		        	<Route path="/admin" component={AdminLayout} />
		        	<Route path="/login" component={Login} />
		            <Route path="/" component={Home} />
		       	</Switch>
	       </Router>
	    </div>
	  );
 	}
}

export default App;
