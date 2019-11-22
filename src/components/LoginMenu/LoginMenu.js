import React, {Component} from 'react';
import Menu from '../Menu.js';
import UsernameInput from './subcomponents/UsernameInput.js';
import PasswordInput from './subcomponents/PasswordInput.js';
import avatar from '../../images/avatar.png';
const languages = require('../../languages/index.js');

export default class LoginMenu extends Component {
    state = {
        password: ''
    };

    render () {
        const {password} = this.state;
        const {language, username, updateUsername, toggleUserLogStatus} = this.props;
        const labels = languages[language];

        return <Menu 
                title={labels.welcome_message}
                button_label={labels.login_label}
                button_function={() => toggleUserLogStatus(true)}
                image={avatar}>
                    <UsernameInput username_label={labels.username_label} username={username} updateUsername={updateUsername} />
                    <PasswordInput password_label={labels.password_label} password={password} updatePassword={this.updatePassword} />
                </Menu>
    };

    updatePassword = (password) => {
        this.setState({
            password
        });
    };
};