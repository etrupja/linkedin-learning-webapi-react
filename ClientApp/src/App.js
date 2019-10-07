import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { Notes } from "./components/Note/Notes";
import { Create } from "./components/Note/Create";
import Delete from "./components/Note/Delete";
import Update from "./components/Note/Update";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/create" component={Create} />
        <Route path="/delete/:id" component={Delete} />
        <Route path="/update/:id" component={Update} />
        <Route path="/notes" component={Notes} />
      </Layout>
    );
  }
}
