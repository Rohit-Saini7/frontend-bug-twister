import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getUserAuth } from '../redux/actions';

const Home = ({
  code,
  setCode,
  expectedOutput,
  setExpectedOutput,
  setRedirect,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  return (
    <React.Fragment>
      <Navbar
        pathName={pathname}
        code={code}
        setCode={setCode}
        expectedOutput={expectedOutput}
        setExpectedOutput={setExpectedOutput}
        setRedirect={setRedirect}
      />
      <Outlet />
    </React.Fragment>
  );
};

export default Home;
