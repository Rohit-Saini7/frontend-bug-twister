import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const Result = ({ setVisibleScreen }) => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  !!user && (docRef = doc(db, 'userProfile', user.uid));

  useEffect(() => {
    async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      }
    };
  }, []);

  return (
    <Container>
      {!user && setVisibleScreen('home')}
      <SectionContainer>
        <Section>
          <Hero>
            <h1 className='heading'>Thanks for attempting quiz.</h1>
          </Hero>
          {user && (
            <UserBox>
              <UserAvatar>
                {!!user ? (
                  <img src={user.photoURL} alt='' />
                ) : (
                  <img src='/images/user.svg' alt='' />
                )}
              </UserAvatar>
            </UserBox>
          )}
          <Hero>
            <h1>Score: {data.totaltime}</h1>
            <h1>Questions Done: {data.questionsDone}</h1>
            <h1>Questions Skipped: {data.skipped}</h1>
          </Hero>
          <Form>
            <Google onClick={() => dispatch(signOutAPI())}>Logout</Google>
          </Form>
        </Section>
      </SectionContainer>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #282a36;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.div`
  background: rgba(174, 238, 239, 0.07);
  border-radius: 10px;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  min-width: 400px;
`;

const Section = styled.section`
  background: rgba(174, 238, 239, 0.14);
  border-radius: 10px;
  display: flex;
  margin: 14px;
  flex-wrap: wrap;
`;

const Hero = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    padding-top: 10px;
    font-weight: 200;
    font-size: 1.3rem;
    &.heading {
      font-size: 2.5rem;
    }
  }
`;

const UserBox = styled.div`
  margin: 5vh auto;
`;

const UserAvatar = styled.div`
  display: flex;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;

const Form = styled.div`
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  width: 50%;
`;

const Google = styled.button`
  background-color: rgba(77, 77, 77, 0.7);
  width: 100%;
  height: 56px;
  border-radius: 28px;
  font-size: 1.25rem;
  color: #f6f2d4;
  &:hover {
    background-color: rgba(174, 238, 239, 0.1);
  }
`;
