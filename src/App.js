import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
<>

<Router>
  <Navbar/>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/services" component={Services}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     <Redirect to='/'/>
    </Switch>
    </Router>
</>
);
}

export default App;
