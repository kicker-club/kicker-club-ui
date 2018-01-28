import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Row,
    Col } from 'reactstrap';
import resources from '../../resources';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar expand="sm" className="navbar-dark bg-primary footer">
                <Row className="footer-content">
                    <Col md="4" xs="12" className="d-flex justify-content-start align-items-center">
                        <NavbarBrand href="/">{resources.title}</NavbarBrand>
                    </Col>
                    <Col md="4" sm="1" className="text-center">
                        <span className="d-inline-block">
                            <Button color="link" className="d-block mx-auto">{resources.footer.facebookShare}</Button>
                            <Button color="secondary" className="d-block mx-auto">{resources.footer.vkShare}</Button>
                        </span>
                    </Col>
                    <Col md="4" className="d-flex justify-content-end align-items-center">
                        <Row>
                            <Col md="12" className="text-right">
                                <Nav navbar className="d-inline-block">
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
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="copyright text-center mt-2">{resources.title} © 2018</Col>
                </Row>
            </Navbar>
        );
    }
}