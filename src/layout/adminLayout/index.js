import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from '../../components/dashboard/adminDashboard'
import Header from '../../components/common/Header';
import './adminLayout.css'
import { Menu, Button,Icon, Row, Col } from 'antd';
import "antd/dist/antd.css";

const { SubMenu } = Menu;

class AdminLayout extends React.Component {

	state = { collapsed: false};

	
  	toggleCollapsed = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
  	};

  render() {
    return (
		    <div className='admin-layout'>
		    	<div>
			    <Row>
			      <Col span={4}>
			       <div className="brand-wrapper">
			        <Button type="primary" onClick={this.toggleCollapsed}>
			          	<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
			        </Button>
			        <span className="brand">multilayoutframework</span></div>
			        <Menu
				          defaultSelectedKeys={['1']}
				          defaultOpenKeys={['sub1']}
				          mode="inline"
				          theme="dark"
				          inlineCollapsed={this.state.collapsed}
				          className="vertical-menu"
				        >
				          <Menu.Item key="1">
				            <Icon type="pie-chart" />
				            <span>Option 1</span>
				          </Menu.Item>
				          <Menu.Item key="2">
				            <Icon type="desktop" />
				            <span>Option 2</span>
				          </Menu.Item>
				          <Menu.Item key="3">
				            <Icon type="inbox" />
				            <span>Option 3</span>
				          </Menu.Item>
				          <SubMenu
				            key="sub1"
				            title={
				              <span>
				                <Icon type="mail" />
				                <span>Navigation One</span>
				              </span>
				            }
				          >
				            <Menu.Item key="5">Option 5</Menu.Item>
				            <Menu.Item key="6">Option 6</Menu.Item>
				            <Menu.Item key="7">Option 7</Menu.Item>
				            <Menu.Item key="8">Option 8</Menu.Item>
				          </SubMenu>
				          <SubMenu
				            key="sub2"
				            title={
				              <span>
				                <Icon type="appstore" />
				                <span>Navigation Two</span>
				              </span>
				            }
				          >
				            <Menu.Item key="9">Option 9</Menu.Item>
				            <Menu.Item key="10">Option 10</Menu.Item>
				            <SubMenu key="sub3" title="Submenu">
				              <Menu.Item key="11">Option 11</Menu.Item>
				              <Menu.Item key="12">Option 12</Menu.Item>
				            </SubMenu>
				          </SubMenu>
				        </Menu>

			      </Col>
			      <Col span={20}>
			        <div className="top-header">header</div>
			        <div className="main-container">
			        <Switch>
			          <Route exact path='/admin/dashboard' component={AdminDashboard} />
			        </Switch>
			        </div>
			      </Col>
			    </Row>
			  </div>
		    </div>
    );
  }
}

export default AdminLayout;