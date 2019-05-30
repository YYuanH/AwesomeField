import React, {Component} from 'react';
import Dashboard from './main';
import { ExportLogin } from './login';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { key: undefined };
  }

  setKey = (key, remember) => {
    this.setState({ key });
    if(remember)
      localStorage.setItem('user_key', key);
  }

  signOut = () => {
    this.setState({key: undefined});
    localStorage.removeItem('user_key');
  }

  render() {
    const { key } = this.state;
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route excat path="/" render={() => <Redirect to="/dashboard" />} />
            <Route 
              path="/dashboard"
              render={ ({history,match}) => ( 
                  <Dashboard
                    history={history}
                    match={match}
                    user_key={localStorage.getItem("user_key") ? localStorage.getItem("user_key") : key}
                    setKey={this.setKey}
                    signOut={this.signOut}
                  /> 
              )} 
            />
            <Route
              path="/login"
              render={ ({history, match}) => (
                <ExportLogin
                  history={history}
                  match={match}
                  user_key={ localStorage.getItem("user_key") ? localStorage.getItem("user_key") : key }
                  setKey={this.setKey}
                />
              )}
              /> 
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
