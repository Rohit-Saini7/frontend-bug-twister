import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Editor from './pages/Editor';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import { getUserAuth } from './redux/actions';

const App = () => {
  const [visibleScreen, setVisibleScreen] = useState('home');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  return (
    <div>
      <Navbar
        visibleScreen={visibleScreen}
        setVisibleScreen={setVisibleScreen}
      />
      {visibleScreen === 'home' ? (
        <Home setVisibleScreen={setVisibleScreen} />
      ) : visibleScreen === 'result' ? (
        <Result setVisibleScreen={setVisibleScreen} />
      ) : visibleScreen === 'editor' ? (
        <Editor setVisibleScreen={setVisibleScreen} />
      ) : (
        'error please contact rohit712wd@gmail.com'
      )}
    </div>
  );
};

export default App;
