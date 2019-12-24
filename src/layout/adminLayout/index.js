import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from '../../components/dashboard/adminDashboard'

class AdminLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>Admin Place</h1>
	        <Switch>
	          <Route exact path='/admin/dashboard' component={AdminDashboard} />
	        </Switch>
      </div>
    );
  }
}

export default AdminLayout;