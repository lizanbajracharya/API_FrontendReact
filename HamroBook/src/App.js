import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
import PrivateRoute from './components/utils/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import NoMatch from './components/NoMatch';
import Register from './components/Register'
import AdminDashboard from './components/AdminPanel';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import AddProduct from './components/AddProduct';
import AllUsers from './components/AllUsers';
import AddCategory from './components/AddCategory';
import BookList from './components/BookList';
import Book from './components/Book';
import Order from './components/Order';
import OrderHistory from './components/OrderHistory';
import Search from './components/Search';
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
        <PrivateRoute path='/category' component={AddCategory} />
        <PrivateRoute path='/addproduct' component={AddProduct} />
        <PrivateRoute path='/booklist/:id' component={Book}/>
        <PrivateRoute path='/book' component={BookList} />
        <PrivateRoute path='/users' component={AllUsers} />
        <PrivateRoute path='/order/:id' component={Order}/>
        <PrivateRoute path='/order' component={OrderHistory}/>
        <PrivateRoute path='/search' component={Search}/>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>

  </Container>
  );
}

export default App;
