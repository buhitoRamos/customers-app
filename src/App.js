import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import HomeContainer from './components/Containers/HomeContainer';


function App() {
  const renderHomeContainer = () => HomeContainer;
  return (    
    <Router>
      <div>
          <Route exact path="/" component={renderHomeContainer()}/>        
      </div>
    </Router>
  );
}

export default App;
