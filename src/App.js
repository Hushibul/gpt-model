import React from 'react';

import './App.css';
import {Blog, Footer, Features, Possibility, WhatGPT3, Header} from './containers'
import { Brand, CTA, Navbar } from './components';

const App = () => {
    return <div className='app'>
        <div className='gradient__bg '>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
}

export default App;