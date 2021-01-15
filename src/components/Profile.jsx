import React, { Component } from "react";
import PropTypes from "prop-types"
import { withAuth } from "./AuthContext";

export class Profile extends Component {
  unauthenticate = () => {
    this.props.logOut();
    this.props.navigate("Home");
  };

  render() {
    return (
      <p>
        Profile. <button onClick={this.unauthenticate}>Log out</button>
      </p>
    );
  }
}

Profile.propTypes = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,

}

export const ProfileWithAuth = withAuth(Profile);
