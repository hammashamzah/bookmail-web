import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    Input,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <Navbar color="inverse" light expand="md">
                <NavbarBrand href="/">BookMail</NavbarBrand>
                <Nav className="navbar">
                    <Form className="form-inline">
                        <Input className="form-control mr-sm-2" type="search" placeholder="Search">
                        </Input>
                        <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </Button>
                    </Form>
                </Nav>
                <Nav className="navbar right">
                    <span class="navbar-text">
                        Already have an account?
                    </span>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Login/Register
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Login via Facebook</a>
                            </DropdownItem>
                            <DropdownItem>
                                <Form>
                                </Form>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        )
    }
}
 
export default Header;