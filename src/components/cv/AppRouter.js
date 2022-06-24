import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Qualifications } from './Qualifications';
import { History } from './History';
import { PersonalInfo } from './PersonalInfo';
import { Summary } from './Summary';
import { NavBar } from './NavBar';
import { Education } from './Education';
import { Home } from './Home';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/personalInfo" component={PersonalInfo} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/qualifications" component={Qualifications} />
          <Route exact path="/history" component={History} />
          <Route exact path="/education" component={Education} />
          <Redirect to={'/'}/>
        </Switch>
      </div>
    </Router>
  )
}
