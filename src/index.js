import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import { 
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';

//import App from './components/App/app';
import ThemeBase from './components/ThemeBase/themebase';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Route path={ROUTES.LANDING} component={ThemeBase}/>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
