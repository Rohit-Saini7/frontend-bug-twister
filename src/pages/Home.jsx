import React from 'react';
import styled from 'styled-components';

const Home = ({ signIn, user, language, setLanguage }) => {
  return (
    <React.Fragment>
      <Container>
        <Section>
          <LeftSection>
            <Hero>Java Club Presents "Bug-Twister"</Hero>
            <Google onClick={() => signIn()} disabled={user ? true : false}>
              <img src='/images/google.svg' alt='' />
              Sign In with Google
            </Google>
          </LeftSection>
          <RightSection>
            <LanguageContainer>
              <Language
                onClick={() => setLanguage()}
                disabled={!user ? true : false}
                title={!user ? 'Sign-In First' : 'C'}
              >
                <img src='/images/icon-c.svg' alt='' />C
              </Language>
              <Language
                onClick={() => setLanguage()}
                disabled={!user ? true : false}
                title={!user ? 'Sign-In First' : 'C++'}
              >
                <img src='/images/icon-c++.svg' alt='' />
                C++
              </Language>
              <Language
                onClick={() => setLanguage()}
                disabled={!user ? true : false}
                title={!user ? 'Sign-In First' : 'Java'}
              >
                <img src='/images/icon-java.svg' alt='' />
                Java
              </Language>
              <Language
                onClick={() => setLanguag()}
                disabled={!user ? true : false}
                title={!user ? 'Sign-In First' : 'Python'}
              >
                <img src='/images/icon-python.svg' alt='' />
                Python
              </Language>
            </LanguageContainer>
            <Hero>Choose a Language</Hero>
          </RightSection>
        </Section>
      </Container>
    </React.Fragment>
  );
};

export default Home;

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

  cursor: pointer;
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

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:hover {
    background-color: rgba(77, 77, 77, 0.7);
  }
  #c {
    background-image: linear-gradient(to right top, #5c6bc0, #283593);
  }
  #cpp {
    background-image: linear-gradient(to right top, #0086d4, #00549d);
  }
  #java {
    background-image: radial-gradient(circle, #f44336, #1565c0);
  }
  #py {
    background-image: radial-gradient(circle, #ffc107, #0277bd);
  }
`;
