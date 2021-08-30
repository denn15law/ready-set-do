
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { AddTasks } from "./components/AddTasks";
import TaskList from './components/TaskList';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <TaskList/>
          </Route>
          <Route exact path="/addTask">
            <AddTasks/>
          </Route>
          <Route exact path="/addWork">
            <AddTasks/>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
