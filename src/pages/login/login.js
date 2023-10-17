import React from "react";
import "./login.css";
import TextBox from "../../components/textfield/textField";
import Button from "../../components/button/Button";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-head">
          <h1>Login</h1>
        </div>

        <form className="login-fields">
          <div>
            <img
              className="input-icons"
              src={require("../../assets/email.png")}
              alt=""
            />
            <label>
              Email ID
              <TextBox type={"email"} placeholder="Enter your Email ID here" />
              <p className="bottom-label">
                <a href="/signup">Don't have account register now?</a>
              </p>
            </label>
          </div>
          <div>
            <img
              className="input-icons"
              src={require("../../assets/password.png")}
              alt=""
            />
            <label>
              Password
              <TextBox
                type={"password"}
                placeholder="Enter your password here"
              />
              <p className="bottom-label">
                <a href="/forgetpsw">Forget Password?</a>
              </p>
            </label>
          </div>

          <Button btype="primary" bTitle="Login">
            <span>Login</span>
          </Button>

          <div className="seprator">
            <div></div>
            <p>or</p>
            <div></div>
          </div>

          <div className="login-footer">
            <Button btype="btn-secondary" bTitle="Login with Google">
              <div className="google-icon">
                <img src={require("../../assets/google.png")} alt="" />
              </div>
              <span>Login with Google</span>
            </Button>
            <div>
              <p>
                By clicking “Login with Google/Email/SAML” above you acknowledge
                that you have read and understood and agree to WebPrint's Terms
                & Conditions & Privacy Policy
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
