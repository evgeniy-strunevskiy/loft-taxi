import React from 'react';
import  { RegistryWithAuth }  from './Registry';
import { render } from '@testing-library/react'


describe("Registry", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<RegistryWithAuth />);
    expect(getByLabelText('Адрес электронной почты')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Имя')).toHaveAttribute('name', 'firstName')
    expect(getByLabelText('Фамилия')).toHaveAttribute('name', 'lastName')
    expect(getByLabelText('Пароль*')).toHaveAttribute('name', 'password')
  });
});