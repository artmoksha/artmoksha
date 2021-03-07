import React, {Component} from 'react';
import Routes from './routes/Routes';
// setup fake backend
import {configureFakeBackend} from './helpers';
// default
import './assets/scss/theme.scss';
// configure fake backend
configureFakeBackend();

/**
 * Main app component
 */
class MokshaApp extends Component {
    render() {
        return <Routes></Routes>;
    }
}

export default MokshaApp;
