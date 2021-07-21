import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import NewEntryScreen from './screens/NewEntryScreen';
import UpdateEntryScreen from './screens/UpdateEntryScreen';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/newEntry' component={NewEntryScreen} exact />
        <Route path='/updateEntry/:id' component={UpdateEntryScreen} />
      </Router>
    </>
  );
}

export default App;
