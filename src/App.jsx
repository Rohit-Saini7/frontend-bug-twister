import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Editor from './pages/Editor';
import Result from './pages/Result';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  const [code, setCode] = useState('');
  const [expectedOutput, setExpectedOutput] = useState('');
  const [redirect, setRedirect] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Home
          code={code}
          setCode={setCode}
          expectedOutput={expectedOutput}
          setExpectedOutput={setExpectedOutput}
          setRedirect={setRedirect}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: '/editor',
              element: (
                <Editor
                  code={code}
                  setCode={setCode}
                  expectedOutput={expectedOutput}
                  setExpectedOutput={setExpectedOutput}
                  redirect={redirect}
                />
              ),
            },
            {
              path: '/result',
              element: <Result />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
