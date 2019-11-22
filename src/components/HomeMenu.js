import React from 'react';
import Menu from './Menu.js';
import cat from '../images/cat.png';
const languages = require('../languages/index.js');

export default function HomeMenu ({language, username, toggleUserLogStatus}) {
    const labels = languages[language];

    return <Menu 
            title={`${labels.welcome_message}, ${username}!`}
            button_label={labels.logout_label}
            button_function={() => toggleUserLogStatus(false)}
            image={cat}>
                <p>
                    {labels.home_message}
                </p>
            </Menu>
};