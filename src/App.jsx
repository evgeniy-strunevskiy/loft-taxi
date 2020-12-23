import React from 'react';
import { Profile } from './components/Profile'
import { Map } from './components/Map'
import  Login  from './components/LoginForm'

const PAGES = {
  map: <Map />,
  profile: <Profile />,
  login: (props) => <Login {...props}/>,
  exit: <Login />
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
                <button onClick={() => this.navigateTo("login")}>
                  Логин
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
            {
              this.state.currentPage === 'login'?
              PAGES[this.state.currentPage]({navigate: this.navigateTo.bind(this)}):
              PAGES[this.state.currentPage] 
            }
          </section>
        </main>
      </>
    )
  }
}

export default App;
