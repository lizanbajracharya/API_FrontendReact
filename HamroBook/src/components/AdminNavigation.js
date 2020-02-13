import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'

class AdminNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/admindashboard'>Hamro Bazar Ebook Store</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href='/addproduct'>Add Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/admindashboard'>Add Book</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/users'>Edit Users</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/category'>Category</NavLink>
                        </NavItem>
                        <NavItem>
                            <Button color='warning' onClick={this.handleLogout}> Logout</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default withRouter(AdminNavigation)