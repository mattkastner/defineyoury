import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
