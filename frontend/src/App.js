import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

import Home from "./components/Home"
import ProductDetails from './components/product/ProductDetails'

import Cart from './components/cart/Cart'

function App() {
  return (
    <Router>
      <div className="App">

            <Header />
              <div className="container-fluid">
                <Route path= "/" component={Home} exact />
                <Route path= "/search/:keyword" component={Home} />
                <Route path= "/product/:id" component={ProductDetails} exact />
              
                <Route path="/cart" component={Cart} exact />
              </div>  
            <Footer />

      </div>
    </Router>
  );
}


export default App;


/*
import { BrowserRouter as Router, Route} from 'react-router-dom'



import Home from "./components/Ho






export default App;





import Footer from "./components/layout/Footer"

import Home from "./components/Home"
import ProductDetails from './components/product/ProductDetails'


function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <div className="container container-fluid">
            <Route path= "/" component={Home} exact />
            <Route path= "/product/:id" component={ProductDetails} exact />
            <Footer />
          </div>
      </div>
    </Router>
  );
}


*/
