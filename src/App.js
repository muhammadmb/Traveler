import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
// import Products from './Pages/Products/Products';
// import Services from './Pages/Services/Services';
// import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/traveler" exact component={Home} />
          {/* <Route path="/products" exact component={Products} />
          <Route path="/services" exact component={Services} />
          <Route path="/signup" exact component={SignUp} /> */}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
