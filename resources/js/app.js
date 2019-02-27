/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import CreateItem from "./components/CreateItem";
import DisplayItem from "./components/DisplayItem";
import EditItem from "./components/EditItem";

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={DisplayItem} />
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
        <Route path="/edit/:id" component={EditItem} />
    </Router>,
    document.getElementById("app")
);
