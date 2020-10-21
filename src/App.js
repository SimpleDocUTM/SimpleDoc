import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './Views/Login';
import DocumentView from './Views/DocumentView'
import QuizView from './Views/QuizView'
import ContributionPage from './Views/ContributionPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/DocumentView' component={DocumentView} />
            <Route exact path='/quiz' component={QuizView} />
            <Route exact path='/ContributionPage' component={ContributionPage} />

          </Switch>
        </BrowserRouter>

      </div>
    );

  }

}


export default App;
