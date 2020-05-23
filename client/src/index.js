import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import * as serviceWorker from './serviceWorker';

const AppWrapper = styled.div`
    max-width: calc(768px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
`;

ReactDOM.render(
    <AppWrapper>
        <Helmet titleTemplate='%s - React.js Boilerplate' defaultTitle='React.js Boilerplate'>
            <meta name='description' content='A React.js Boilerplate application' />
        </Helmet>
        <GlobalStyle />
        <App />
    </AppWrapper>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
