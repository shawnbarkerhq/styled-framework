import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Font from './components/Font';
import Colors from './components/Colors';
import Buttons from './components/Buttons';
import Icons from './components/Icons';
import FloatingButton from './components/FloatingButton';
import Navbars from './components/Navbars';
import Lists from './components/Lists';
import Badges from './components/Badges';
import Grid from './components/Grid';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Font} />
            <Route path="/font" exact component={Font} />
            <Route path="/colors" exact component={Colors} />
            <Route path="/buttons" exact component={Buttons} />
            <Route path="/icons" exact component={Icons} />
            <Route path="/floating" exact component={FloatingButton} />
            <Route path="/navbars" exact component={Navbars} />
            <Route path="/lists" exact component={Lists} />
            <Route path="/badges" exact component={Badges} />
            <Route path="/grid" exact component={Grid} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
