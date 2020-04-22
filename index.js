import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks"
import Admin from './components/admin';
import Student from './components/student';
import Teacher from './components/teacher';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

ReactDOM.render(
<ApolloProvider client = { client }>
<React.StrictMode>
<BrowserRouter>

<Switch>
  <Route  exact path="/" component={App}/>
  <Route   path="/components/admin" component={Admin}/>
  <Route   path="/components/student" component={Student}/>
  <Route path="/components/teacher" component={Teacher}/>
  
</Switch>
</BrowserRouter>
</React.StrictMode>
    
</ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
