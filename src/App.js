// import logo from './logo.svg';
// import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import SingUp from './Page/SingUp/SingUp';
import SingIn from './Page/SingIn/SingIn';
import CreateProject from './Page/CreateProject/CreateProject';
import GetAllProject from './Page/GetAllProject/GetAllProject';

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={SingUp}></Route>
        <Route exact path='/singin' component={SingIn}></Route>
        <Route exact path='/createProject' component={CreateProject}></Route>
        <Route exact path='/getAllProject' component={GetAllProject}></Route>
      </Switch>
    </Router>
  );
}

export default App;
