import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import React pages
import Search from './pages/Search';
import Error404 from './pages/Error404';
// import React components (that are GLOBAL to all pages)
import Navbar from './components/Navbar';



class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={Error404} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
