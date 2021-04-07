import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp';
import Tours from './Pages/Tours/Tours';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/traveler" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/tours" exact component={Tours} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
