import React, { Component } from "react";
import PropTypes from "prop-types"
import { withAuth } from "./AuthContext";

export class Profile extends Component {

  render() {
    return (
      <p>
        Profile. <button onClick={this.props.unauthenticate}>Log out</button>
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
