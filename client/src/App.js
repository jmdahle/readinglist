import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <h1>Hello World</h1>
        {/* <Nav /> */}
        {/* <Switch> */}
          {/* <Route exact path="/" component={Books} /> */}
          {/* <Route exact path="/books" component={Books} /> */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        {/* </Switch> */}
      </div>
      </Router>
    );
  }
}

export default App;
