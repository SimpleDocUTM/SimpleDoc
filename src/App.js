import React from 'react';

// import logo from './logo.svg';
// import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './Views/Login';
import DocumentView from './Views/DocumentView'
import QuizView from './Views/QuizView'
import ContributionPage from './Views/ContributionPage'
import QuizzesPage from './Views/QuizzesPage'
import Concepts from './Views/Concepts'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/DocumentView/:id' component={DocumentView} />
            <Route exact path='/quiz/:id' component={QuizView} />
            <Route exact path='/ContributionPage' component={ContributionPage} />
            <Route exact path='/QuizzesPage' component={QuizzesPage} />
            <Route exact path='/Concepts/:category' component={Concepts} />

          </Switch>
        </BrowserRouter>

      </div>
    );

  }

}


export default App;
