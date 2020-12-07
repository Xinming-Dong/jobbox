import './App.css';
import JobSeekerComponent from './components/JobSeekerComponent';
import LoginComponent from './components/LoginComponent';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LoginComponent />
    </div>
  );
}

export default App;
