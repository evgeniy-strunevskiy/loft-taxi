import React from 'react';

class Login extends React.Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    
  }

  handleEmailChange = event => {
    this.setState({email: event.target.value})
  }
  handleFirstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  handleLastNameChange = event => {
    this.setState({LastName: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {email, firstName, lastName, password} = this.state
    return (
      <>
      <h1>Регистрация</h1>
      <div>
        <div>Уже зарегистрирован?</div>
        <button type="button" >Войти</button>
      </div>
      <form>
        <label htmlFor='email'>Адрес электронной почты</label>
        <input id='email' value={email} onChange={this.handleEmailChange} type='email' name='email' size='28'/>

        <label htmlFor='name'>Имя</label>
        <input id='name' value={firstName} onChange={this.handleFirstNameChange} type='name' name='name' size='28'/>

        <label htmlFor='name'>Фамилия</label>
        <input id='name' value={lastName} onChange={this.handleLastNameChange} type='name' name='name' size='28'/>

        <label htmlFor='password'>Пароль*</label>
        <input id='password' value={password} onChange={this.handlePasswordChange} type='password' name='password' size='28'/>

        <input type="button" value="Зарегистрироваться"/>
      </form>
      </>
    );
  }
}

export default Login;