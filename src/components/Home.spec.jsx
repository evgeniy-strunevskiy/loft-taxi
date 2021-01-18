import React from 'react';
import  { HomeWithAuth }  from './Home';
import { render } from '@testing-library/react'


describe("Home", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<HomeWithAuth />);
    expect(getByLabelText('Имя пользователя:')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Пароль*')).toHaveAttribute('name', 'password')
  });
});