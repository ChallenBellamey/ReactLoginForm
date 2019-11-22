import React from 'react';
import '../../../stylesheets/Menu.css';

export default function UsernameInput ({username_label, username, updateUsername, error}) {
    const textboxClassName = (error) ? 'textbox-error' : 'textbox';
    return <div className='username_input input'>
        <p className='username_label label'>
            {username_label}
        </p>
        <input className={`username_textbox ${textboxClassName}`}
                maxLength="20"
                value={username}
                onChange={(event) => updateUsername(event.nativeEvent.target.value)}>
        </input>
    </div>
};