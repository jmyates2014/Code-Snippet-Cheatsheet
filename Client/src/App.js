import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Content from "./components/Content";
import Footer from "./components/Footer";
import FilterSearch from "./components/FilterSearch";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <FilterSearch />
        <Filter />
        <Content />
        <Footer />
      </>
    </div>
  );
}

export default App;
