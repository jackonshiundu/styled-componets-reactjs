import {BrowserRouter as Router
  ,Route ,Routes, Switch} from 'react-router-dom'


import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';

import GlobalStyle from './Globalstyles'
import Home from './Pages/Home';
function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
				<Route path="/features" exact component={Features} />
				<Route path="/pricing" exact component={Pricing} />
				<Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer/>
    </Router>
 
  );
}

export default App;
