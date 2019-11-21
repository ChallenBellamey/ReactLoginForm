import React from 'react';

export default function PasswordInput ({password_label}) {
    return <div classname='password_input'>
        <p classname='password_label'>
            {password_label}
        </p>
        <input type="password" classname='password_textbox'>

        </input>
    </div>
};