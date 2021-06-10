import React, { Fragment, PureComponent} from "react";
import {Route, Switch} from "react-router-dom";
/* import Link from "../Link";
import List, {Item} from "../List"; */
import {RandomComponent} from "../Random";

export  default class App extends PureComponent {
  render(){
    return (
        <Fragment>
{/*             <div>
              <nav>
              <List>
                <Item>
                  <Link to="/" text="Home" />
                </Item>
                <Item>
                  <Link to="/about" text="About" />
                </Item>
                <Item>
                  <Link to="/users" text="Users" />
                </Item>
              </List>
              </nav>
            </div> */}
            <Switch>
            <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
            </Switch>    
            <RandomComponent/>
        </Fragment>
    );
  }
}


function Home() {
    return <div></div>;
  }
  
  function About() {
    return <table border="1">
    <tr>
        <th>nombre</th>
        <th>dirccion</th>
    </tr>
      <td>Edit</td>
      <td>EIAO</td>
    </table>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }