import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Routes from '../routes/index';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <RecoilRoot>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes />
                <Footer />
            </Router>
        </RecoilRoot>
    );
}

export default App;
