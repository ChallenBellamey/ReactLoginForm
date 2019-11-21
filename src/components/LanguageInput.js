import React from 'react';
import fs from 'fs';

export function LanguageInput ({language}) {

    const {language_label} = require(`../languages/${language}.json`);
    const languages = fs.readdirSync('../languages').map(file => file.split('.')[0]);

    return <div classname={'language_input'}>
        <p classname={'language_label'}>
            {language_label}
        </p>
        <select classname={'language_select'}>
            {languages.map((language, i) => <option key={i}>{language}</option>)}
        </select>
    </div>
};