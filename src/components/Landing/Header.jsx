import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import resources from '../../resources';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar expand="sm" className="navbar-dark bg-primary">
                <NavbarBrand href="/">{resources.title}</NavbarBrand>
                <Collapse isOpen={true}>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">{resources.menu.home}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contacts">{resources.menu.contacts}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/app">{resources.menu.signIn}</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}