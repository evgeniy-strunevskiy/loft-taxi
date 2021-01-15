import React from 'react';
import {AuthProvider, AuthContext} from './AuthContext';
import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';

describe('AuthContext', () => {
  describe('#logIn, #LogOut', () => {
    it("sets 'isLoggedIn' to  true", () => {
      let isLoggedIn;
      let logIn;
      let logOut;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              logOut = value.logOut
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      )
      expect(isLoggedIn).toBe(false)
      act(() => {
        logIn("valid@mail.com", "correctpassword");
      })
      expect(isLoggedIn).toBe(true)
      act(() => {
        logOut();
      })
      expect(isLoggedIn).toBe(false)
    })
  })
})