import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "../css/FixedBoostrap.css";

import ScreenInputData from "./sinput/ScreenInputData";
import ScreenChooseTemplate from "./stemplate/ScreenChooseTemplate";
import ScreenCustomizeResume from "./scustom/ScreenCustomizeResume";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ScreenInputData} />
          <Route exact path="/choosetemplate" component={ScreenChooseTemplate} />
          <Route exact path="/customizeresume" component={ScreenCustomizeResume} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
