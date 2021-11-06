import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => {
	const { user, logOut } = useAuth();
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
				<NavLink to="/shop">Shop</NavLink>
				<NavLink to="/review">Order Review</NavLink>
				<NavLink to="/inventory">Manage Inventory</NavLink>
				{user.email && <NavLink to="/orders">Orders</NavLink>}
				{user.email ? (
					<button onClick={logOut}>Log Out</button>
				) : (
					<NavLink to="/login">Log In</NavLink>
				)}
			</nav>
		</div>
	);
};

export default Header;
