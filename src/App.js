import "./App.css";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import { BrowserRouter } from "react-router-dom";
import Routers from "./components/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header> </Header>
        <Routers></Routers>
        <Footer> </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
