import React, {Component} from 'react';
import Menu from '../Menu.js';
import UsernameInput from './subcomponents/UsernameInput.js';
import PasswordInput from './subcomponents/PasswordInput.js';
import ErrorNotification from './subcomponents/ErrorNotification.js';
import avatar from '../../images/avatar.png';
const languages = require('../../languages/index.js');

export default class LoginMenu extends Component {
    state = {
        password: '',
        errors: {
            username: null,
            password: null
        }
    };

    render = () => {
        const {password, errors} = this.state;
        const {language, username, updateUsername} = this.props;
        const labels = languages[language];

        return <Menu 
                title={labels.welcome_message}
                button_label={labels.login_label}
                button_function={() => this.submitForm()}
                image={avatar}>
                    <UsernameInput username_label={labels.username_label} username={username} updateUsername={updateUsername} error={errors.username} />
                    <PasswordInput password_label={labels.password_label} password={password} updatePassword={this.updatePassword} error={errors.password} />
                    <ErrorNotification errors={errors} />
                </Menu>
    };

    updatePassword = (password) => {
        this.setState({
            password
        });
    };

    submitForm = () => {
        console.log('here')
        const {username, toggleUserLogStatus} = this.props;
        const {password} = this.state;
        let usernameError, passwordError;
        if (username.length <= 8) {
            usernameError = 'Username must be at least 8 characters long.'
        };
        if (password.length <= 8) {
            passwordError = 'Password must be at least 8 characters long.'
        };
        if (!usernameError && !passwordError) {
            toggleUserLogStatus(true);
            this.setState({
                password: '',
                errors: {
                    username: null,
                    password: null
                }
            });
        } else {
            this.setState({
                errors: {
                    username: usernameError,
                    password: passwordError
                }
            });
        };
    };
};