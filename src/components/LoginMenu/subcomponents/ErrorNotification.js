import React from 'react';
import '../../../stylesheets/Menu.css';

export default function ErrorNotification ({errors}) {
    return <div className='error_notification'>
        {errors.username && <p classname='error_username'>
            {'Username error: '}
            {errors.username}
        </p>}
        {errors.password && <p classname='error_password'>
            {'Password error: '}
            {errors.password}
        </p>}
    </div>
};