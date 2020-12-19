import React from 'react';
import { Profile } from './Profile'
import { Map } from './Map'
import {Login} from './login'

const PAGES = {
  map: <Map />,
  profile: <Profile />,
  exit: <Login />
}


class Navigation extends React.Component {
  state = {
    currentPage: "map"
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
            </ul>
          </nav>
        </header>
        <main>
          <section>{PAGES[this.state.currentPage]}</section>
        </main>
      </>
    )
  }
}

export default Navigation;
