import React from 'react';
const languages = require('../languages/index.js');

export default function LanguageInput ({language, setLanguage}) {

    const language_label = languages[language].language_label;
    console.log(languages[language])

    return <div classname={'language_input'}>
        <p classname={'language_label'}>
            {language_label}
        </p>
        <select classname={'language_select'}
                value={language}
                onChange={(event) => setLanguage(event.nativeEvent.target.value)}>
            {Object.keys(languages).map((language, i) => <option key={i}>{language}</option>)}
        </select>
    </div>
};