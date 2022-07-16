// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Carousel from './components/carousel';
import Welcome from './components/Welcome';
import  Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
      <Welcome />
       {/* <Carousel /> */}

       <Cards />
       <Footer />
      <NavBar />

    </div>
  );
}

export default App;
