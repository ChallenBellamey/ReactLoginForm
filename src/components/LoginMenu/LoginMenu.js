import React, {Component} from 'react';
const Menu = require('../Menu.js');
const languages = require('../../languages/index.js');

class LoginMenu extends Component {
    state = {
        labels: languages[this.props.language]
    };

    render () {
        return <Menu />
    };
};