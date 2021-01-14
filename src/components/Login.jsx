import React from 'react';

export class Home extends React.Component {
  state = {
    firstName: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.navigate('map');
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

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor='email'>Имя пользователя:</label>
        <input id='email' value={firstName} onChange={this.handleFirstNameChange} type='email' name='email' size='28'/>

        <label htmlFor='password'>Пароль*</label>
        <input id='password' value={password} onChange={this.handlePasswordChange} type='password' name='password' size='28'/>

        <input type="submit" value="Войти"/>
      </form>
      </>
    );
  }
}