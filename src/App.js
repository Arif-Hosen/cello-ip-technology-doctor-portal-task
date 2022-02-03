import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AddPatient from './pages/AddPatient/AddPatient';
import PatientList from './pages/PatientList/PatientList';
import Register from './pages/Login/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        {/* Route setup */}
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addpatient'>
              <AddPatient></AddPatient>
            </PrivateRoute>
            <PrivateRoute path='/patientlist'>
              <PatientList></PatientList>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
