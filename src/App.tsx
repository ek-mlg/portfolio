import React from 'react';
import './App.css';
import Header from "./Common/Components/Header/Header";
import Main from "./Common/Components/Main/Main";
import Skills from "./Common/Components/Skills/Skills";
import Works from "./Common/Components/Works/Works";
import Contacts from "./Common/Components/Contacts/Contacts";
import Footer from "./Common/Components/Footer/Footer";
import About from "./Common/Components/About/About";

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
