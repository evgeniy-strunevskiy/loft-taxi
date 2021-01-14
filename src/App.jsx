import React from 'react';
import { Profile } from './components/Profile'
import { Map } from './components/Map'
import { Home }  from './components/Login'
import {withAuth} from './components/AuthContext'

const PAGES = {
  map: <Map />,
  profile: <Profile />,
  Home: (props) => <Home {...props}/>,
  exit: <Home />
}


class App extends React.Component {
  state = {
    currentPage: "profile"
  };

  navigateTo = (page) => {
    this.setState({currentPage: page})
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
                <button onClick={() => this.navigateTo("profile")}>
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
              this.state.currentPage === 'Home'?
              PAGES[this.state.currentPage]({navigate: this.navigateTo.bind(this)}):
              PAGES[this.state.currentPage] 
            }
          </section>
        </main>
      </>
    )
  }
}

export default withAuth(App);
