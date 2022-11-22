import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Editor from './pages/Editor';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';
import { getUserAuth } from './redux/actions';

const App = () => {
  const [visibleScreen, setVisibleScreen] = useState('home');
  const [expectedOutput, setExpectedOutput] = useState('');
  const [code, setCode] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, []);

  return (
    <div>
      <Navbar
        visibleScreen={visibleScreen}
        setVisibleScreen={setVisibleScreen}
        code={code}
        expectedOutput={expectedOutput}
        setExpectedOutput={setExpectedOutput}
        setCode={setCode}
      />
      {visibleScreen === 'home' ? (
        <Home setVisibleScreen={setVisibleScreen} />
      ) : visibleScreen === 'result' ? (
        <Result setVisibleScreen={setVisibleScreen} />
      ) : visibleScreen === 'editor' ? (
        <Editor
          setVisibleScreen={setVisibleScreen}
          code={code}
          setCode={setCode}
          expectedOutput={expectedOutput}
          setExpectedOutput={setExpectedOutput}
        />
      ) : (
        'error please contact "rohit712wd@gmail.com"'
      )}
    </div>
  );
};

export default App;
