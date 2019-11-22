import React from 'react';
import '../../../stylesheets/Menu.css';

export default function PasswordInput ({password_label, password, updatePassword, error}) {
    const textboxClassName = (error) ? 'textbox-error' : 'textbox';
    return <div className='password_input input'>
        <p className='password_label label'>
            {password_label}
        </p>
        <input type="password" className={`password_textbox ${textboxClassName}`}
                maxLength="20"
                value={password}
                onChange={(event) => updatePassword(event.nativeEvent.target.value)}>
        </input>
    </div>
};