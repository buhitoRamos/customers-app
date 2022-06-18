import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import HomeContainer from './components/Containers/HomeContainer';
import CustomersContainer from './components/Containers/CustomersContainer'
import CustomerContainer from './components/Containers/CustomerContainer';


function App() {
  const renderHomeContainer = () => HomeContainer;
  return (    
    <Router>
      <div>
        <Route exact path="/" component={renderHomeContainer()} />
        <Route exact path="/customers" component={CustomersContainer} />
        <Switch>
          <Route path="/customers/:dni"
            render={props => <CustomerContainer dni={props.match.params.dni} />} />
        </Switch>
            
      </div>
    </Router>
  );
}

export default App;
