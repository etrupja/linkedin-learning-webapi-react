import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Counter } from './components/Counter';
import { AllNotes } from './components/Note/AllNotes';
import { Create } from './components/Note/Create';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/create' component={Create} />
        <Route path='/notes' component={AllNotes} />
      </Layout>
    );
  }
}
