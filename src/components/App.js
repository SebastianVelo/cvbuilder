import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "../css/FixedBoostrap.css";

import ScreenInputData from "./sinput/SInput";
import ScreenChooseTemplate from "./stemplate/STemplate";
import ScreenCustomizeResume from "./scustom/SCustom";

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
