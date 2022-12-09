import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setConfirmationAPI,
  setLanguageAPI,
  signInAPI,
} from '../redux/actions';
import { Navigate } from 'react-router-dom';

const languageButttonsData = [
  { name: 'C', language: 'c', icon: 'icon-c.svg' },
  { name: 'C++', language: 'cpp', icon: 'icon-c++.svg' },
  { name: 'Java', language: 'java', icon: 'icon-java.svg' },
  { name: 'Python', language: 'py', icon: 'icon-python.svg' },
];

const Login = () => {
  const user = useSelector((state) => state.userState.user);
  const confirm = useSelector((state) => state.languageState.confirm);
  const languageFromStore = useSelector(
    (state) => state.languageState.language
  );
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Container>
        {!!user && !!confirm && <Navigate to='/editor' />}
        <Section>
          <LeftSection>
            <Hero>Java Club Presents "Bug-Twister"</Hero>
            <Google
              onClick={() => dispatch(signInAPI())}
              disabled={!!user ? true : false}
            >
              <img src='/images/google.svg' alt='' />
              Sign In with Google
            </Google>
          </LeftSection>
          <RightSection>
            <LanguageContainer>
              {languageButttonsData.map(({ name, language, icon }, index) => (
                <React.Fragment key={index}>
                  {languageFromStore === language ? (
                    <Language
                      id={language}
                      onClick={() => dispatch(setConfirmationAPI(user))}
                      disabled={!user ? true : false}
                    >
                      <img src={`/images/${icon}`} alt='' />
                      Confirm, {name}?
                    </Language>
                  ) : (
                    <Language
                      onClick={() =>
                        dispatch(setLanguageAPI({ language: language }))
                      }
                      disabled={!user ? true : false}
                      title={!user ? 'Sign-In First' : name}
                    >
                      <img src={`/images/${icon}`} alt='' />
                      {name}
                    </Language>
                  )}
                </React.Fragment>
              ))}
            </LanguageContainer>
            <Hero>Choose a Language</Hero>
          </RightSection>
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default Login;

const Container = styled.div`
  background: rgba(174, 238, 239, 0.07);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  margin: auto;
  display: flex;
  margin-top: 7vh;
  max-width: 1300px;
`;

const Section = styled.section`
  background: rgba(174, 238, 239, 0.14);
  border-radius: 10px;
  display: grid;
  margin: 14px;
  min-height: 70vh;
  width: 100%;
  gap: 10px;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 1.8fr;
  }
  @media (min-width: 701px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.h1`
  width: 80%;
  font-weight: 200;
  padding-top: 7.6vh;
  font-size: 3rem;
  margin-top: 5vh;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 20px;
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;

const Google = styled.button`
  background-color: rgba(77, 77, 77, 0.7);
  height: 56px;
  margin-top: 11vh;
  width: 60%;
  border-radius: 99px;
  color: #f6f2d4;
  transition: 250ms;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: rgba(174, 238, 239, 0.1);
  }

  @media (max-width: 700px) {
    margin-top: 40px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7.6vh;
  width: 60%;

  @media (max-width: 700px) {
    margin-top: 1vh;
  }
`;

const Language = styled.button`
  border-radius: 28px;
  color: #f6f2d4;
  margin-bottom: 20px;
  font-size: 1.25rem;
  height: 56px;
  transition: 250ms;
  background-color: rgba(174, 238, 239, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transition: 1s;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: rgba(77, 77, 77, 0.7);
  }
  &#c {
    background-image: linear-gradient(
      to right top,
      #5c6bc0,
      #5664bc,
      #4f5eb8,
      #4957b4,
      #4251b0,
      #3e4dac,
      #3948a9,
      #3544a5,
      #3240a0,
      #2f3c9c,
      #2b3997,
      #283593
    );
  }
  &#cpp {
    background-image: linear-gradient(
      to right top,
      #0086d4,
      #0083d0,
      #007fcc,
      #007cc9,
      #0079c5,
      #0075c0,
      #0071bc,
      #006db7,
      #0067b1,
      #0060aa,
      #005aa4,
      #00549d
    );
  }
  &#java {
    background-image: radial-gradient(
      circle,
      #f44336,
      #ec2870,
      #c73da0,
      #8656bd,
      #1565c0
    );
  }
  &#py {
    background-image: radial-gradient(
      circle,
      #ffc107,
      #ff8361,
      #ff67a8,
      #a273ce,
      #0277bd
    );
  }
`;

// <Language
//                 onClick={() => dispatch(setLanguageAPI({ language: 'cpp' }))}
//                 disabled={!user ? true : false}
//                 title={!user ? 'Sign-In First' : 'C++'}
//               >
//                 <img src='/images/icon-c++.svg' alt='' />
//                 C++
//               </Language>
//               <Language
//                 onClick={() => dispatch(setLanguageAPI({ language: 'java' }))}
//                 disabled={!user ? true : false}
//                 title={!user ? 'Sign-In First' : 'Java'}
//               >
//                 <img src='/images/icon-java.svg' alt='' />
//                 Java
//               </Language>
//               <Language
//                 onClick={() => dispatch(setLanguageAPI({ language: 'py' }))}
//                 disabled={!user ? true : false}
//                 title={!user ? 'Sign-In First' : 'Python'}
//               >
//                 <img src='/images/icon-python.svg' alt='' />
//                 Python
//               </Language>
