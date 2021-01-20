import React from 'react';
import  { Home }  from './Home';
import { render } from '@testing-library/react'


describe("Home", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
    <Home
    isLoggedIn={false} 
    navigate={() => undefined} 
    logOut={() => undefined}
    logIn={() => undefined}
    />
    );
    expect(getByLabelText('Имя пользователя:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль*')).toHaveAttribute('name', 'password')
  });
  describe("when logged in", () => {
    it("renders profile link", () => {
      const { getByText } = render(
      <Home 
      isLoggedIn={true}  
      navigate={() => undefined} 
      logOut={() => undefined}
      logIn={() => undefined}
      />
      
      );
      expect(getByText("go to profile")).toBeInTheDocument()
    });
  });
});