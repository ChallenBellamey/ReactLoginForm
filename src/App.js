import React, {Component} from 'react';
import './App.css';
import LanguageInput from './components/LanguageInput.js';
import LoginMenu from './components/LoginMenu/LoginMenu.js';
import HomeMenu from './components/HomeMenu.js';

class App extends Component {
  state = {
    language: 'english',
    username: '',
    userLoggedIn: false
  };

  render () {
    const {language, username, userLoggedIn} = this.state;

    return <div className="App">
      <LanguageInput language={language} setLanguage={this.setLanguage} />
      {!userLoggedIn && <LoginMenu language={language} username={username} updateUsername={this.updateUsername} toggleUserLogStatus={this.toggleUserLogStatus} />}
      {userLoggedIn && <HomeMenu language={language} username={username} toggleUserLogStatus={this.toggleUserLogStatus} />}
    </div>
  };

  setLanguage = (language) => {
    this.setState({
      language
    });
  };

  updateUsername = (username) => {
    this.setState({
      username
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
