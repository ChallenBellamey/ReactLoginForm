import React, {Component} from 'react';
import Menu from '../Menu.js';
import UsernameInput from './subcomponents/UsernameInput.js';
import PasswordInput from './subcomponents/PasswordInput.js';
const languages = require('../../languages/index.js');

export default class LoginMenu extends Component {
    state = {
        
    };

    render () {
        const labels = languages[this.props.language];

        return <Menu 
                title={labels.welcome_message}
                button_label={labels.login_label}
                button_function={() => console.log('clicked')}>
                    <UsernameInput username_label={labels.username_label} />
                    <PasswordInput password_label={labels.password_label} />
                </Menu>
    };
};