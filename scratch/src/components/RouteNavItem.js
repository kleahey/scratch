import React from "react";
import { Route } from "react-router-dom";
import { NavItem } from "react-bootstrap";

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <NavItem
        onClick={e => history.push(e.currentTarget.getAttriute("href"))}
        {...props}
        active={match ? true : false }
      >
        {props.children}
      </NavItem>}
  />;
