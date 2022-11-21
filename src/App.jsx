import React from 'react';
import Editor from './pages/Editor';
import Home from './pages/Home';
import Result from './pages/Result';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Editor />
      <Result />
    </div>
  );
};

export default App;
