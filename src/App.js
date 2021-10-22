
import { Route, Switch } from 'react-router';
import NotFound from './components/form-controls/NotFound';
import SystemMainenance from './components/SystemMaintenance';
import Login from './features/Login';
// import Posts from './features/Posts';

function App() {
  return (
    <div className="App">
     <Switch>
       

        <Route path="/" component={SystemMainenance} exact />
        <Route path="/login" component={Login} />        

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
