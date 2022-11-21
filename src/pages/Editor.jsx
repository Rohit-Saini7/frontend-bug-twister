import React from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';

const Editor = (props) => {
  return (
    <Container>
      <OutputContainer>
        EXPECTED OUTPUT <br />
        {props.expectedOutput}
      </OutputContainer>
      <AceEditor
        mode={props.language}
        theme='dracula'
        height='70vh'
        width='100%'
        className='test'
        wrapEnabled={true}
        onChange={(e) => {
          props.setCode(e);
        }}
        name='UNIQUE_ID_OF_DIV'
        setOptions={{
          showPrintMargin: false,
          fontSize: 20,
        }}
        value='a'
      />
    </Container>
  );
};

export default Editor;

const Container = styled.div`
  background-color: #282a36;
  height: 100%;
  display: grid;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 5fr;
  }
  @media (min-width: 701px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const OutputContainer = styled.div`
  vertical-align: top;
  height: 100%;
  margin-left: 10px;
  font-weight: 500;
  font-size: 1.5rem;
`;
