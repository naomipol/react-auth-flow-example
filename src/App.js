import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ProvideAuth } from './Auth/AuthContext';
import PrivateRoute from './Auth/PrivateRoute';
import LoginPage from './Login/LoginPage';
import HomePage from './Home/HomePage';
import UsersPage from './Users/UsersPage';

function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute exact path="/">
              <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/users">
              <UsersPage />
            </PrivateRoute>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
