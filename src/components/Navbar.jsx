import React from 'react';
import styled from 'styled-components';
// import Ripple from './Ripple';

function Navbar({ user, signIn, signOut }) {
  return (
    <Container>
      <NavbarWrap>
        <Logo alt='' src='/images/logo.png' />
        <BasicButton
          className='login'
          disabled={user ? true : false}
          onClick={() => signIn()}
        >
          Sign In
        </BasicButton>
        {user && (
          <UserButton title='Log out' onClick={() => signOut()}>
            <UserAvatar
              alt=''
              src={user && user.photoURL ? user.photoURL : '/images/user.svg'}
            />
          </UserButton>
        )}
      </NavbarWrap>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  z-index: 10;
  width: 100%;
  position: sticky;
  background-color: rgba(53, 88, 154, 0.5);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const NavbarWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 64px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

const BasicButton = styled.button`
  position: relative;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75;
  letter-spacing: 0.1rem;
  min-width: 64px;
  padding: 6px 8px;
  border-radius: 4px;
  transition: 250ms;
  margin: 16px 0;
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'allowed')};
  margin-left: auto;
  margin-right: 2vw;

  &:hover {
    background-color: #537ec5;
  }
`;

const UserButton = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 50%;
`;

const UserAvatar = styled.img`
  display: flex;
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;

export default Navbar;
