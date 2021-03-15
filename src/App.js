import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
