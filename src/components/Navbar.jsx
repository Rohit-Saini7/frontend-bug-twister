import { doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import db from '../firebase';
import { signInAPI, signOutAPI } from '../redux/actions';
import { getNextQuestion } from './GetNextQuestion';
let DocRef;

function Navbar({
  pathName,
  code,
  setCode,
  expectedOutput,
  setExpectedOutput,
  setRedirect,
}) {
  const [response, setResponse] = useState('');
  const [counter, setCounter] = useState(150);
  const [que, setQue] = useState(2);
  const [queSkip, setQueSkip] = useState(1);
  const [sTime, setSTime] = useState(1500);

  const user = useSelector((state) => state.userState.user);
  const language = useSelector((state) => state.languageState.language);
  const set = useSelector((state) => state.questionState.set);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  !!user && (DocRef = doc(db, 'userRecord', user.uid));

  useEffect(() => {
    const getData = async () => {
      const docSnap = await getDoc(DocRef);
      if (docSnap.exists()) {
        setQue(docSnap.data().questionsDone + 1);
        setCounter(docSnap.data().time);
        if (docSnap.data().questionsDone + 1 < 8) {
          const NextQuestion = getNextQuestion(
            set,
            language,
            docSnap.data().questionsDone + 1
          );
          setCode(NextQuestion.question);
          setExpectedOutput(NextQuestion.expectedOutput);
        } else {
          setCounter(0);
          setRedirect(true);
        }
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const timer =
      counter > 0 && pathName === '/editor'
        ? setInterval(() => setCounter(counter - 1), 1000)
        : '';
    return () => clearInterval(timer);
  }, [counter, pathName]);

  const handleSubmit = async () => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    let urlencoded = new URLSearchParams();
    urlencoded.append('code', code);
    urlencoded.append('language', language);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow',
    };

    fetch('https://localhost:5000/', requestOptions)
      .then((response) => response.json())
      .then(async (result) => {
        if (result.success) {
          if (result.output === expectedOutput) {
            setResponse('Submitted');
            await updateDoc(DocRef, {
              questionsDone: que - 1,
              time: counter,
              totaltime: increment(sTime - counter),
            });
            setSTime(counter);
            if (que < 8) {
              setQue(que + 1);
              setTimeout(() => {
                setResponse('');
              }, 2000);
            } else {
              setCounter(0);
              setTimeout(() => {
                setRedirect(que === 8 ? true : false);
              }, 3000);
            }
            const NextQuestion = getNextQuestion(set, language, que);
            setCode(NextQuestion.question);
            setExpectedOutput(NextQuestion.expectedOutput);
          } else {
            setResponse('ERROR');
            setTimeout(() => {
              setResponse('');
            }, 2000);
          }
        }
      })
      .catch((error) => console.error('error', error));
  };

  const handleSkip = async () => {
    setQueSkip(queSkip + 1);
    setResponse('skipped');

    await updateDoc(DocRef, {
      questionsDone: que - 1,
      time: counter,
      skipped: queSkip,
    });
    if (que < 8) {
      setQue((p) => p + 1);
      const NextQuestion = getNextQuestion(set, language, que);
      setCode(NextQuestion.question);
      setExpectedOutput(NextQuestion.expectedOutput);

      setTimeout(() => {
        setResponse('');
      }, 2000);
    } else {
      setCounter(0);
      setTimeout(() => {
        setRedirect(que === 8 ? true : false);
      }, 3000);
    }
  };

  return (
    <Container>
      {/* (redirect || counter === 0) && <Navigate to='/result' /> */}
      <NavbarWrap>
        <Logo alt='' src='/images/logo.png' />
        {pathName === '/editor' && (
          <React.Fragment>
            <BasicButton>{counter} sec</BasicButton>
            {!!response ? (
              <BasicButton className={response}>{response}</BasicButton>
            ) : (
              <React.Fragment>
                <BasicButton onClick={handleSubmit}>Submit</BasicButton>
                <BasicButton onClick={handleSkip}>Skip</BasicButton>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {!user ? (
          <BasicButton onClick={() => dispatch(signInAPI())}>
            Sign In
          </BasicButton>
        ) : (
          <UserButton title='Log out' onClick={() => dispatch(signOutAPI())}>
            <UserAvatar
              alt=''
              src={
                !!user && !!false /* user.photoURL */
                  ? user.photoURL
                  : '/images/user.svg'
              }
              referrerpolicy='no-referrer'
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'allowed')};
  margin-left: auto;
  margin-right: 2vw;

  &:hover {
    background-color: #537ec5;
  }
  &.ERROR {
    animation: errorGlowing 1000ms infinite;
  }

  &.Submitted,
  &.skipped {
    animation: submitGlowing 1000ms infinite;
  }
  @keyframes errorGlowing {
    0% {
      background-color: #e0210b;
      box-shadow: 0 0 5px #e0210b;
    }
    40% {
      background-color: #fa6e1a;
      box-shadow: 0 0 20px #fa6e1a;
    }
    100% {
      background-color: #f0af3c;
      box-shadow: 0 0 5px #f0af3c;
    }
  }
  @keyframes submitGlowing {
    0% {
      background-color: #2ba805;
      box-shadow: 0 0 3px #2ba805;
    }
    50% {
      background-color: #49e819;
      box-shadow: 0 0 10px #49e819;
    }
    100% {
      background-color: #2ba805;
      box-shadow: 0 0 3px #2ba805;
    }
  }
`;

const UserButton = styled(BasicButton)`
  min-width: 48px;
  border: 0;
  padding: 0;
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
