import logo from './logo.svg';
import './App.css';
// import Form from './components/Form'
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'


import {
  Home,
  Form,
  Edit
} from './pages/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/aplikasi/:id">
          <Edit />
        </Route>
        <Route path="/aplikasi">
          <Form />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
