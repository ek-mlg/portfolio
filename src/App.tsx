import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import JobOptions from "./ JobOptions / JobOptions";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <JobOptions />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
