import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routes from '../routes/index';
import Footer from './Footer';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <Header />
                <Routes />
                <Footer />
            </Router>
        </RecoilRoot>
    );
}

export default App;
