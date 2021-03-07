import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {BreadcrumbItem, Container} from 'reactstrap';
import {Menu, X, Search, Settings, User, HelpCircle, Lock, LogOut} from 'react-feather';

import logo from '../../../../assets/images/logo.png';

class Topbar extends Component {
    constructor(props) {
        super(props);

        this.handleRightSideBar = this.handleRightSideBar.bind(this);
    }

    /**
     * Toggles the right sidebar
     */
    handleRightSideBar = () => {
        this.props.showRightSidebar();
    }

    render() {
        return (
            <React.Fragment>
                <nav className="am-navbar navbar navbar-expand flex-column flex-md-row navbar-custom shadow">
                    <Container fluid>
                        { /* logo */}
                        <Link to="/" className="navbar-brand mr-0 mr-md-2 logo">
              <span className="logo-lg">
                <img src={logo} alt="" height="24"/>
                <span className="d-inline h5 ml-2 text-logo">Art Moksha</span>
              </span>
                            <span className="logo-sm">
                <img src={logo} alt="" height="24"/>
              </span>
                        </Link>
                        { /* menu*/}
                        <ul className="navbar-nav bd-navbar-nav flex-row list-unstyled menu-left mb-0">
                            <li className="">
                                <button className="button-menu-mobile open-left disable-btn"
                                        onClick={this.props.openLeftMenuCallBack}>
                                    <Menu className="menu-icon"/>
                                    <X className="close-icon"/>
                                </button>
                            </li>
                        </ul>


                        <ul className="navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0">
                            <li className="notification-list">
                                <Link className="btn btn-primary right-bar-toggle button-metamask"
                                      to="/account/login">Connect</Link>
                            </li>
                        </ul>
                    </Container>
                </nav>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    {}
)(Topbar);
