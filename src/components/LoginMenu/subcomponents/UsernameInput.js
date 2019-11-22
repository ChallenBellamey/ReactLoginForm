import React from 'react';

export default function UsernameInput ({username_label, username, updateUsername}) {
    return <div classname='username_input'>
        <p classname='username_label'>
            {username_label}
        </p>
        <input classname='username_textbox'
                value={username}
                onChange={(event) => updateUsername(event.nativeEvent.target.value)}>
        </input>
    </div>
};