import React from 'react';

export default function Menu ({title, children, button_label, button_function}) {
    return <div classname={'menu'}>
        <div classname={'menu_header'}>
            {title}
        </div>
        <div classname={'menu_body'}>
            <div classname={'menu_content'}>
                {children}
            </div>
            <button classname={'menu_button'}
                    onClick={button_function}>
                {button_label}
            </button>
        </div>
    </div>
};