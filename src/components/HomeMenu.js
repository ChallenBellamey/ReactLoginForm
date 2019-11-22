import React from 'react';
import Menu from './Menu.js';
const languages = require('../languages/index.js');

export default function HomeMenu ({language, username}) {
    const labels = languages[language];

    return <Menu 
            title={`${labels.welcome_message}, ${username}!`}
            button_label={labels.logout_label}
            button_function={() => console.log('clicked')}>
                <p>
                    {labels.home_message}
                </p>
            </Menu>
};