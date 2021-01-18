import React from 'react';
import PropTypes from "prop-types"
import { withAuth } from './components/AuthContext'
import { RegistryWithAuth } from './components/Registry'
import { HomeWithAuth }  from './components/Home'
import { ProfileWithAuth } from './components/Profile'
import Map from './components/Map'

const PAGES = {
  map: (props) => <Map {...props}/>,
  Profile: (props) => <ProfileWithAuth {...props}/>,
  Home: (props) => <HomeWithAuth {...props}/>,
  exit: (props) => <HomeWithAuth {...props}/>,
  Registry: (props) => <RegistryWithAuth {...props}/>,
}

class App extends React.Component {
  state = {
    currentPage: "Home"
  };

  unauthenticate = () => {
    this.props.logOut();
    this.navigateTo("Home");
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page})
    } else if (page === 'Registry') {
      this.setState({currentPage: 'Registry'})
    } else {
      this.setState({currentPage: 'Home' })
    }
  }

  render() {
    return(
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => this.navigateTo("map")}>
                  Карта
                </button>
              </li>
              <li>
                <button onClick={() => this.navigateTo("Profile")}>
                  Профиль
                </button>
              </li>
              <li>
                <button onClick={this.unauthenticate}>
                  Выйти
                </button>
              </li>
              <li>
                <button onClick={() => this.navigateTo("Home")}>
                  Логин
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
            {
              PAGES[this.state.currentPage]({navigate: this.navigateTo, unauthenticate: this.unauthenticate})
            }
          </section>
        </main>
      </>
    )
  }
}

App.propTypes = {
  logIn: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

export default withAuth(App);
