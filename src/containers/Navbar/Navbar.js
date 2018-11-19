import React from "react";
import { MDBNavbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Fa } from "mdbreact";

class HeaderNav extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <div className="container-fluid" style={{ paddingRight: "0", paddingLeft: "0" }}>
                <MDBNavbar color="secondary-color" dark expand="md" fixed="top">
                    <NavbarBrand>
                        <strong className="white-text">Shopping Cart</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                    <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                        <NavbarNav right>

                            <NavItem>
                                <NavLink className="waves-effect waves-light d-flex align-items-center" to="#!" onClick={this.props.clickviewCart}> {this.props.cartInfo.pdtCount} <Fa icon="shopping-cart" className="ml-1" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle className="dopdown-toggle" nav>
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0" style={{ height: "35px", padding: 0 }} alt="" />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-default" right>
                                        <DropdownItem href="#!">My account</DropdownItem>
                                        <DropdownItem href="#!">Log out</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default HeaderNav;