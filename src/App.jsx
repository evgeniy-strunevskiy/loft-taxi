import React from 'react';
import PropTypes from "prop-types"
import { ProfileWithAuth } from './components/Profile'
import Map from './components/Map'
import { HomeWithAuth }  from './components/Home'
import { withAuth } from './components/AuthContext'


const PAGES = {
  map: (props) => <Map {...props}/>,
  Profile: (props) => <ProfileWithAuth {...props}/>,
  Home: (props) => <HomeWithAuth {...props}/>,
  exit: (props) => <HomeWithAuth {...props}/>,
}


class App extends React.Component {
  state = {
    currentPage: "Home"
  };

  navigateTo = (page) => {
    if(this.props.isLoggedIn) {
      this.setState({currentPage: page})
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
                <button onClick={() => this.navigateTo("exit")}>
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
              PAGES[this.state.currentPage]({navigate: this.navigateTo.bind(this)})
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
