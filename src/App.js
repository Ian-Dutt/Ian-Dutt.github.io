import logo from "./logo.svg";
import "./styles/App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <>
      <Header />
      <MainBody />
      <Footer />
    </>
  );
}

function MainBody() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tis a bit empty, but dont fret. Ill finish this sometime this brek.</p>
        <p>
          <a
            className="App-link"
            href="https://github.com/ian-dutt"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {/* &bull; */}
          {/* <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a> */}
        </p>
      </header>
    </div>
  );
}

export default App;
