import React from 'react';

export default function UsernameInput ({username_label}) {
    return <div classname='username_input'>
        <p classname='username_label'>
            {username_label}
        </p>
        <input classname='username_textbox'>

        </input>
    </div>
};