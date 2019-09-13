import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Layout from './components/layout/Layout';
import Footer from './components/footer/Footer';

import './assets/styles/global.scss';

function App() {
    return (
        <div className="wrapper">
            <Router> 
                <Navbar/>
                <Layout/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
