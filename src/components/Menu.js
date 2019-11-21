import React from 'react';

export function Menu ({title, content, button}) {
    return <div classname={'menu'}>
        <div classname={'menu_header'}>
            {title}
        </div>
        <div classname={'menu_body'}>
            <div classname={'menu_content'}>
                {content}
            </div>
            <div classname={'menu_button'}>
                {button}
            </div>
        </div>
    </div>
};