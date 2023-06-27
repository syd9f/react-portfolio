import React, { useState } from 'react';
import './App.css';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// Pages
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>
      <main>
      {renderPage()}
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
