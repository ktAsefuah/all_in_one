
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content';

function App() {
  return (
    <div className="App">
      <div className='top'>
      <Header />
        <Content />
        <Footer />
        </div>
    </div>
  );
}

export default App;
