import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { withRouter } from "react-router-dom";

class Login extends Component {
  render() {
    const responseGoogle = (response) => {
      console.log("login called");
      localStorage.setItem("id", response.Ca);
      if (response.Ca) this.props.history.push("/account");
    };

    return (
      <div className="homepage">
        <div>
          <h2 className="title">Owner Login</h2>
        </div>
        <div className="login-btn">
          <GoogleLogin
            clientId="897280484114-n3o89hbu55ps0pjv8mpni2mbfio3hvuk.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
