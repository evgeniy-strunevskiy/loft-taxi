import React from 'react';

class App extends React.Component {
  state = {
    firstName: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    
  }

  handleFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {firstName, password} = this.state;
    return (
      <>
      <h1>Войти</h1>

      <div>
        <div>Новый пользователь?</div>
        <button type="button">Зарегистрируйтесь</button>
      </div>

      <form onSubmit={this.handleSubmit}>
        <label htmlFor='email'>Имя пользователя</label>
        <input id='email' value={firstName} onChange={this.handleFirstNameChange} type='email' name='email' size='28'/>

        <label htmlFor='password'>Пароль*</label>
        <input id='password'  value={password} onChange={this.handlePasswordChange} type='password' name='password' size='28'/>

        <input type="button" value="Войти"/>
      </form>
      </>
    );
  }
}

export default App;