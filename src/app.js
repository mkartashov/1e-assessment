import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import OverviewPage from "./pages/home";

class App extends React.Component {
  render() {
    return <Router>
      <Route path="/" exact component={OverviewPage} />
      <Route path="/users" exact component={OverviewPage} />
      <Route path="/roles" exact component={OverviewPage} />
      <Route path="/consumers" exact component={OverviewPage} />
      <Route path="/overview" exact>
      	<Redirect to="/" />
      </Route>
    </Router>
  }
}

export default App