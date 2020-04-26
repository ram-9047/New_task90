import React from "react";

//relative imports
import AccountDetails from "./AccountDetails";
import Login from "./Login";
import CreateOrder from "./CreateOrder";
import { Route, Switch, withRouter } from "react-router-dom";
import data from "../Dummydata.json";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      totalOrder: [...data],
    };
  }

  addOrder = (data) => {
    this.setState({ totalOrder: this.state.totalOrder.concat(data) }, () =>
      this.props.history.push("/account")
    );
  };

  deleteOrder = (id) => {
    this.setState({
      totalOrder: this.state.totalOrder.filter((order) => order.id !== id),
    });
  };

  render() {
    console.log(this.state.totalOrder.length, "vbfdbkvd");
    console.log(this.state.id);
    return (
      <div>
        <Switch>
          <Route path="/account">
            {localStorage.id ? (
              <AccountDetails
                totalOrder={this.state.totalOrder}
                deleteOrder={this.deleteOrder}
              />
            ) : (
              <p>Please Login</p>
            )}
          </Route>
          <Route path="/create_order">
            {localStorage.id ? (
              <CreateOrder addOrder={this.addOrder} />
            ) : (
              <p>Please Login </p>
            )}
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Home);
