import React from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    
    render() {      
      	return (
      		<Nav navbar>
      			<NavLink className="nav-link" to="/login">
      				<span>Login</span>
      			</NavLink>
      			<NavLink className="nav-link" to="/card">
      				<span>Card</span>
      			</NavLink>      			
      		</Nav>
        );
    }
}

export default Header;