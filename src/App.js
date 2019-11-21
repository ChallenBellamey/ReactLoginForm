import React, {Component} from 'react';
import './App.css';
import LanguageInput from './components/LanguageInput.js';

class App extends Component {
  state = {
    language: 'english'
  };

  render () {
    const {language} = this.state;

    return <div className="App">
      <LanguageInput language={language} setLanguage={this.setLanguage}/>
    </div>
  };

  setLanguage = (language) => {
    this.setState({
      language
    });
  };
};

export default App;
