import './App.css';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Render from './components/Render';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
      <Render />
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
