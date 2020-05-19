import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Navigation/Header';
import Main from './Navigation/Main';
import Footer from './Navigation/Footer';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Header />
                <Main />
                <Footer />
            </Router>
        </RecoilRoot>
    );
}

export default App;
