import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Label,
    FormGroup,
    Button,
    Alert,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';


import {AvForm, AvGroup, AvInput, AvFeedback} from 'availity-reactstrap-validation';
import {Mail, Lock} from 'react-feather';

import {loginUser, changeLayout} from '../../redux/actions';
import {isUserAuthenticated} from '../../helpers/authUtils';
import Loader from '../../components/Loader';
import logo from '../../assets/images/logo.png';
import * as layoutConstants from "../../constants/layout";

class Login extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.changeLayout = this.changeLayout.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.state = {
            username: 'test',
            password: 'test'
        }
        // this.props.changeLayout(layoutConstants.LAYOUT_HORIZONTAL);
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    /**
     * Handles the submit
     */
    handleValidSubmit = (event, values) => {
        this.props.loginUser(values.username, values.password, this.props.history);
    }


    /**
     * Redirect to root
     */
    renderRedirectToRoot = () => {
        const isAuthTokenValid = isUserAuthenticated();
        if (isAuthTokenValid) {
            return <Redirect to='/'/>
        }
    }

    /**
     * On layout change
     */
    changeLayout = e => {
        switch (e) {
            case 'horizontal':
                this.setState({
                    isHorizontalLayout: !this.state.isHorizontalLayout,
                    isCondensed: false,
                    isDetachedLayout: false,
                });
                this.props.changeLayout(layoutConstants.LAYOUT_HORIZONTAL);
                break;
            default:
                this.setState({
                    isHorizontalLayout: false,
                    isCondensed: false,
                    isDetachedLayout: false,
                });
                this.props.changeLayout(layoutConstants.LAYOUT_VERTICAL);
                break;
        }
    };

    render() {
        const isAuthTokenValid = isUserAuthenticated();
        return (
            <React.Fragment>

                {this.renderRedirectToRoot()}

                {(this._isMounted || !isAuthTokenValid) && <div className="account-pages my-5">
                    <Container>
                        <Row className="justify-content-center mt-3">
                            <Col xl={6}>
                                <Card className="">
                                    <CardBody className="p-0">
                                        <Row>
                                            <Col md={12} className="p-5 position-relative">
                                                { /* preloader */}
                                                {this.props.loading && <Loader/>}

                                                <div className="mx-auto mb-5">
                                                    <a href="/">
                                                        <img src={logo} alt="" height="24"/>
                                                        <h3 className="d-inline align-middle ml-1 text-logo">Artmoksha</h3>
                                                    </a>
                                                </div>

                                                {this.props.error &&
                                                <Alert color="danger" isOpen={this.props.error ? true : false}>
                                                    <div>{this.props.error}</div>
                                                </Alert>}

                                                <AvForm onValidSubmit={this.handleValidSubmit}
                                                        className="authentication-form">
                                                    <AvGroup className="">
                                                        <Label for="username">Username</Label>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Mail className="icon-dual"/>
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="text" name="username" id="username"
                                                                     placeholder="hello@coderthemes.com"
                                                                     value={this.state.username} required/>
                                                        </InputGroup>

                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>


                                                    <AvGroup className="mb-3">
                                                        <Label for="password">Password</Label>
                                                        <Link to="/account/forget-password"
                                                              className="float-right text-muted text-unline-dashed ml-1">Forgot
                                                            your password?</Link>
                                                        <InputGroup>
                                                            <InputGroupAddon addonType="prepend">
                                                                <span className="input-group-text">
                                                                    <Lock className="icon-dual"/>
                                                                </span>
                                                            </InputGroupAddon>
                                                            <AvInput type="password" name="password" id="password"
                                                                     placeholder="Enter your password"
                                                                     value={this.state.password} required/>
                                                        </InputGroup>
                                                        <AvFeedback>This field is invalid</AvFeedback>
                                                    </AvGroup>

                                                    <FormGroup className="form-group mb-0 text-center">
                                                        <Button color="primary" className="btn-block">Log In</Button>
                                                    </FormGroup>
                                                </AvForm>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mt-3">
                            <Col className="col-12 text-center">
                                <p className="text-muted">Don't have an account? <Link to="/account/register"
                                                                                       className="text-primary font-weight-bold ml-1">Sign
                                    Up</Link></p>
                            </Col>
                        </Row>

                    </Container>
                </div>}
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const {user, loading, error} = state.Auth;
    return {user, loading, error};
};
console.log(JSON.stringify(loginUser) + ' g')

export default connect(mapStateToProps, {loginUser})(Login);