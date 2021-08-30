import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Filter />
        <Content />
        <Footer />
      </>
    </div>
  );
}

export default App;
