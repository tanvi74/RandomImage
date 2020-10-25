import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import RandomImage from './RandomImage';
import GetImage from './GetImage'

function App() {
  return (
    <Router>
      <Route exact path="/" component={RandomImage} />
      <Route exact path="/:id" component={GetImage} />

    </Router>
  );
}

export default App;

