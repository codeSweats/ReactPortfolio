import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./pages/About";
import Nav from "./pages/Nav";
import Header from "./pages/Header";

function App() {
  return (
    <>
    <Nav />
      <Header />
      <About />
    </>
  );
}

export default App;
