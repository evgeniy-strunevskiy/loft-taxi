import React from "react";
import { withAuth } from "./AuthContext";
import PropTypes from "prop-types"

export class Home extends React.Component {
  state = {
    firstName: "",
    password: "",
  };

  goToProfile = () => {
    this.props.navigate("Profile");
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.firstName, this.state.password);
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { firstName, password } = this.state;
    return (
      <>
        {this.props.isLoggedIn ? (
          <p>
            You are logged in
            <button onClick={this.goToProfile}>go to profile</button>
          </p>
        ) : (
          <>
            <h1>Войти</h1>

            <div>
              <div>Новый пользователь?</div>
              <button type="button" onClick={() => this.props.navigate("Registry")} >Зарегистрируйтесь</button>
            </div>

            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label htmlFor="email">Имя пользователя:</label>
              <input
                id="email"
                value={firstName}
                onChange={this.handleFirstNameChange}
                type="email"
                name="email"
                size="28"
              />

              <label htmlFor="password">Пароль*</label>
              <input
                id="password"
                value={password}
                onChange={this.handlePasswordChange}
                type="password"
                name="password"
                size="28"
              />

              <button type="submit" value="Войти">
                log in
              </button>
            </form>
          </>
        )}
      </>
    );
  }
}

Home.propTypes = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
}

export const HomeWithAuth = withAuth(Home);
