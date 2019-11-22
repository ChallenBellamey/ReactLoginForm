import React from 'react';
import '../stylesheets/Menu.css';

export default function Menu ({title, children, button_label, button_function, image}) {
    return <div className='menu'>
        <div className='menu_header'>
            <p className='menu_title'>
                {title}
            </p>
            <div className='image_box'>
                <img className='avatar' src={image} alt='' />
            </div>
        </div>
        <div className='menu_body'>
            {children}
            <button className='menu_button'
                    onClick={button_function}>
                {button_label.toUpperCase()}
            </button>
        </div>
    </div>
};