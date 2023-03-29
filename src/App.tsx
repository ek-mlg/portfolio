import React from 'react';
import './App.scss';
import Header from "./common/components/Header/Header";
import Main from "./common/components/Main/Main";
import Skills from "./common/components/Skills/Skills";
import Works from "./common/components/Works/Works";
import Contacts from "./common/components/Contacts/Contacts";
import Footer from "./common/components/Footer/Footer";
import About from "./common/components/About/About";

function App() {

    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Skills />
            <Works />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
