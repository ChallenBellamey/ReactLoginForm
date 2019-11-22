import React from 'react';
import '../../../stylesheets/Menu.css';

export default function UsernameInput ({username_label, username, updateUsername}) {
    return <div className='username_input input'>
        <p className='username_label label'>
            {username_label}
        </p>
        <input className='username_textbox textbox'
                value={username}
                onChange={(event) => updateUsername(event.nativeEvent.target.value)}>
        </input>
    </div>
};