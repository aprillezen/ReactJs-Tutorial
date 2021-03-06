import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class AppNav extends React.Component{

	render(){
			return (
			   <div> 
					<Navbar inverse fixedTop>
					    <Navbar.Header>
					      <Navbar.Brand>
					        <a href="#">Akadem</a>
					      </Navbar.Brand>
					      <Navbar.Toggle />
					    </Navbar.Header>
					    <Navbar.Collapse>
					      <Nav>
					        <LinkContainer to="/home"> 
					              <NavItem eventKey={1}>Home</NavItem>
					        </LinkContainer>
					        <LinkContainer to="/dashboard"> 
					              <NavItem eventKey={2}>Dashboard</NavItem>
					        </LinkContainer>
					        
					        <NavDropdown eventKey={3} title="Academics" id="basic-nav-dropdown">				        
						          <MenuItem eventKey={3.1} href="/student">Students</MenuItem>
						          <MenuItem eventKey={3.2}>Teachers</MenuItem>
						          <MenuItem eventKey={3.3}>Parents</MenuItem>
						          <MenuItem divider />
						          <MenuItem eventKey={3.3}>Separated link</MenuItem>
						      </NavDropdown>
					        
					      </Nav>
					      <Nav pullRight>
					        <NavItem eventKey={1} href="#">Link Right</NavItem>
					        <NavItem eventKey={2} href="#">Link Right</NavItem>
					      </Nav>
					    </Navbar.Collapse>
					  </Navbar>

				{ this.props.children }

				 </div>

			)
		}

}

export default AppNav