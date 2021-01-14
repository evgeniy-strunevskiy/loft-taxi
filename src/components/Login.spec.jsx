import React from 'react';
import  {Home}  from './Login';
import { render } from '@testing-library/react'


describe("Home", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<Home />);
    expect(getByLabelText('Имя пользователя:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль*')).toHaveAttribute('name', 'password')
  });
});