import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class CreateOrder extends Component {
  constructor() {
    super();
    this.state = {
      orderId: null,
      customerName: null,
      customerEmail: null,
      product: null,
      quantity: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.customerEmail) {
      alert("Invalid Email");
    } else if (!this.state.customerName) {
      alert("Enter Customer Name");
    } else if (!this.state.orderId) {
      alert("Enter Order ID");
    } else if (!this.state.quantity) {
      alert("Enter the quantity");
    } else {
      this.props.addOrder({
        customer_email: this.state.customerEmail,
        customer_name: this.state.customerName,
        id: this.state.orderId,
        product: this.state.product,
        quantity: this.state.quantity,
      });
    }
  };

  handleBack = () => {
    this.props.history.push("/account");
  };
  render() {
    return (
      <div>
        <div className="new_order_title">
          <h2> Add New Order</h2>
        </div>
        <div>
          <button onClick={this.handleBack} className="back_btn">
            Back
          </button>
        </div>
        <form onSubmit={this.handleSubmit} className="form_box">
          <div className="flex">
            <label>Order Id</label>
            <input
              placeholder="Order Id"
              type="string"
              value={this.state.orderId}
              name="orderId"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="flex">
            <label>Customer Name</label>
            <input
              placeholder="Name"
              type="text"
              value={this.state.customerName}
              name="customerName"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="flex">
            <label>Customer Email</label>
            <input
              placeholder="email"
              type="email"
              value={this.state.customerEmail}
              name="customerEmail"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="flex">
            <label>Product</label>
            <select
              value={this.state.product}
              onChange={this.handleChange}
              name="product"
            >
              <option>Product-1</option>
              <option>Product-2</option>
              <option>Product-3</option>
            </select>
          </div>
          <div className="flex">
            <label>Quantity</label>
            <input
              type="number"
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit" className="add_order_btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateOrder);
