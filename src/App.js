import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/login">
        <Login></Login>
        </Route>
        <Route exact path="/register">
        <Register></Register>
        </Route>
        <PrivateRoute exact path="/cart">
          <Cart></Cart>
        </PrivateRoute>
        <PrivateRoute exact  path="/details/:foodId">
          <Details></Details>
        </PrivateRoute>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
