import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About";
import Nav from "./pages/Nav";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
    <Nav />
      <Header />
      <About />
      <Portfolio />
    </>
  );
}

export default App;
