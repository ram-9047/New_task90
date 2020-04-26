import React, { Component } from "react";
import { Link } from "react-router-dom";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      isVisible: false,
      email: null,
      name: null,
      product: null,
      quantity: null,
      orderId: null,
    };
  }

  // Change the state

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //  Edit the selected Order

  handleEdit = (id) => {
    console.log(id);
    this.props.totalOrder.find((order) =>
      order.id === id
        ? this.setState({
            isVisible: true,
            email: order.customer_email,
            name: order.customer_name,
            product: order.product,
            quantity: order.quantity,
            orderId: order.id,
          })
        : ""
    );
  };

  // Update the selected Order

  handleUpdate = (event) => {
    event.preventDefault();
    console.log("called");
    this.props.totalOrder.map((order) => {
      if (order.id === this.state.orderId) {
        order.customer_email = this.state.email;
        order.customer_name = this.state.name;
        order.product = this.state.product;
        order.quantity = this.state.quantity;

        this.setState({
          isVisible: false,
        });
      }
    });
  };

  //   LogOut frow the website
  handleLogOut = () => {
    console.log("logout");
    localStorage.clear();
    window.location.href = "/";
  };
  render() {
    return (
      <div>
        <h2 className="details_title">Account Details</h2>
        <div className="details_nav">
          <button className="details_total_order">Total Order</button>
          <Link to="/create_order">
            <button className="details_create_order">Create a new Order</button>
          </Link>
          <button onClick={this.handleLogOut} className="log_out_btn">
            Log Out
          </button>
        </div>

        <div className="total_order">
          {this.props.totalOrder.map((order) => (
            <div className="all_list">
              <ul className="order_list" data-key={order.id}>
                <li>Email id : {order.customer_email}</li>
                <li>Name : {order.customer_name}</li>
                <li>Order Id: {order.id}</li>
                <li>Product : {order.product}</li>
                <li>Quantity : {order.quantity}</li>
              </ul>
              {/* input box for editing */}
              {this.state.isVisible && this.state.orderId === order.id ? (
                <div>
                  <form className="edit_form" onSubmit={this.handleUpdate}>
                    <p>Order-id : {this.state.orderId}</p>
                    <label>
                      Email{" "}
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      ></input>{" "}
                    </label>
                    <label>
                      Name{" "}
                      <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      ></input>
                    </label>

                    <label>
                      Product
                      <select
                        name="product"
                        value={this.state.product}
                        onChange={this.handleChange}
                      >
                        <option>Product 1</option>
                        <option>Product 2</option>
                        <option>Product 3</option>
                      </select>
                    </label>
                    <label>
                      Quantity{" "}
                      <input
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                      ></input>
                    </label>
                    <button className="update_btn" type="submit">
                      Update
                    </button>
                  </form>
                </div>
              ) : (
                ""
              )}

              <div className="list_update_btn">
                <button onClick={() => this.handleEdit(order.id)}>Edit</button>
                <button onClick={() => this.props.deleteOrder(order.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Account;
