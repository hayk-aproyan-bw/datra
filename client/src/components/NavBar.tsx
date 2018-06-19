import * as React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from "react-router";

interface INavBarState {
}

export class NavBar extends React.Component<any, INavBarState> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="white" tag={Link} to="/somewhere">Settings</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
