import React, {useState} from 'react'
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link, withRouter } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;

const DashboardNav = withRouter(props => {

	// Use location from router as a key to show that link is selected.
	const { location } = props;

	return (
		<>
			<Sider>
				<div className={"userDashHeader"}>
					<Title level={3} className={"userDashHeaderFont"}>Alpaca Vids</Title>
				</div>
				<Menu theme="dark" mode="inline" className={"userDashMenu"} selectedKeys={[location.pathname]}>
					<Menu.Item key="/user-dashboard">
						<Link to="/user-dashboard" style={{ color: "#fff", display: "block" }}>
						<Icon type="home" /> Dashboard</Link>
					</Menu.Item>
					<Menu.Item key="/profile">
						<Link to="/profile" style={{ color: "#fff", display: "block" }}>
						<Icon type="user" /> My Profile</Link>
					</Menu.Item>
					<Menu.Item key="/videos">
						<Link to="/videos" style={{ color: "#fff", display: "block" }}>
							<Icon type="play-circle" /> My Videos</Link>
					</Menu.Item>
					<Menu.Item key="/teams" disabled>
						<Icon type="calendar" /> My Teams
					</Menu.Item>
					<Menu.Item key="/setting" disabled>
						<Icon type="setting" />
						Teams Settings
					</Menu.Item>
					
					<hr style={{margin: "40px 0"}}/>

					<h3 style={{ color: "white", paddingLeft: "24px", paddingBottom: "20px"}}>Team Controls</h3>
					<Menu.Item key="/manage-teams" disabled>
						<Icon type="calendar" />
						<span>Manage Teams</span>
					</Menu.Item>
					<Menu.Item key="/team-archive" disabled>
						<Icon type="folder" />
						<span>Team Archive</span>
					</Menu.Item>
				</Menu>
			</Sider>
		</>
	)
});

export default DashboardNav;