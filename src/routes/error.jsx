import React from 'react';
import {useRouteError} from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.div`
  width: fit-content;
  h1 {
    font-size: 72px;
    text-align: center;
  }
  p {
    font-size: 32px;
    text-align: center;
  }
  * {
    margin-bottom: 10px;
  }
  
  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 56px;
    }
    p {
      font-size: 20px;
    }
  }
`;

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <Page id="error-page">
            <ErrorText>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </ErrorText>
        </Page>
    );
};

export default Error;