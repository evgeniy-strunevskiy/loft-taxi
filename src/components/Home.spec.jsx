import React from 'react';
import  { HomeWithAuth }  from './Home';
import { render } from '@testing-library/react'


describe("Home", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(
    <HomeWithAuth
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
      <HomeWithAuth 
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