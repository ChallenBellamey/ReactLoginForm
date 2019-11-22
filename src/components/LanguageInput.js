import React from 'react';
import '../stylesheets/LanguageInput.css';
const languages = require('../languages/index.js');

export default function LanguageInput ({language, setLanguage}) {

    const language_label = languages[language].language_label;

    return <div className={'language_input input'}>
        <p className={'language_label label'}>
            {language_label}
        </p>
        <select className={'language_select'}
                value={language}
                onChange={(event) => setLanguage(event.nativeEvent.target.value)}>
            {Object.keys(languages).map((language, i) => <option key={i}>{language}</option>)}
        </select>
    </div>
};