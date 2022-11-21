import React, { useState } from 'react';
import Editor from './pages/Editor';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';

const App = () => {
  const [screenVisible, setScreenVisible] = useState('home');
  return (
    <div>
      <Navbar
        screenVisible={screenVisible}
        setScreenVisible={setScreenVisible}
      />
      {screenVisible === 'home' ? (
        <Home />
      ) : screenVisible === 'result' ? (
        <Result />
      ) : screenVisible === 'editor' ? (
        <Editor />
      ) : (
        'error please contact rohit712wd@gmail.com'
      )}
    </div>
  );
};

export default App;
