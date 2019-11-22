import React from 'react';
import '../../../stylesheets/Menu.css';

export default function PasswordInput ({password_label, password, updatePassword}) {
    return <div className='password_input input'>
        <p className='password_label label'>
            {password_label}
        </p>
        <input type="password" className='password_textbox textbox'
                value={password}
                onChange={(event) => updatePassword(event.nativeEvent.target.value)}>
        </input>
    </div>
};