import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomeContainer from './components/Containers/HomeContainer';
import CustomersContainer from './components/Containers/CustomerContainer'


function App() {
  const renderHomeContainer = () => HomeContainer;
  return (    
    <Router>
      <div>
          <Route exact path="/" component={renderHomeContainer()}/>
          <Route exact path="/customers" component={CustomersContainer}/>   
      </div>
    </Router>
  );
}

export default App;
