import React from 'react';

export default function PasswordInput ({password_label, password, updatePassword}) {
    return <div classname='password_input'>
        <p classname='password_label'>
            {password_label}
        </p>
        <input type="password" classname='password_textbox'
                value={password}
                onChange={(event) => updatePassword(event.nativeEvent.target.value)}>
        </input>
    </div>
};