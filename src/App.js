import "./App.css";
import LayerOne from "./component/LayerOne";
import LayerTwo from "./component/LayerTwo";

import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <LayerOne />
      <LayerTwo />
      <Footer />
    </div>
  );
}

export default App;
