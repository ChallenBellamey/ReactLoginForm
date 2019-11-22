import React, {Component} from 'react';
import './App.css';
import LanguageInput from './components/LanguageInput.js';
import LoginMenu from './components/LoginMenu/LoginMenu.js';
import HomeMenu from './components/HomeMenu.js';

class App extends Component {
  state = {
    language: 'english',
    userLoggedIn: false,
    username: ''
  };

  render () {
    const {language} = this.state;

    return <div className="App">
      <LanguageInput language={language} setLanguage={this.setLanguage}/>
      <LoginMenu language={language} toggleUserLogStatus={this.toggleUserLogStatus} />
      <HomeMenu language={language} username={null} toggleUserLogStatus={this.toggleUserLogStatus} />
    </div>
  };

  setLanguage = (language) => {
    this.setState({
      language
    });
  };

  toggleUserLogStatus = (userLoggedIn) => {
    const username = (userLoggedIn) ? this.state.username : '';
    this.setState({
      userLoggedIn,
      username
    });
  };
};

export default App;
