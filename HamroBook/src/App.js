import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import PrivateRoute from './components/utils/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import NoMatch from './components/NoMatch';
import Register from './components/Register'
import AdminDashboard from './components/admin/AdminPanel';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
function App() {
  return (
    <Container>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginComponent} />
        <Route path='/register' component={Register} />
        <Route path='/admin' component={Admin}/>
        <PrivateRoute path='/admindashboard' component={AdminDashboard} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/profile' component={UserProfile} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>

  </Container>
  );
}

export default App;
