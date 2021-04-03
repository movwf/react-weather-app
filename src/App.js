import './App.css';

import {WeatherDataProvider} from "./contexts/WeatherContext";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WeatherSide from "./components/WeatherSide/WeatherSide";
import InfoSide from "./components/InfoSide/InfoSide";


function App() {

  return (
    <WeatherDataProvider>
      <div className="App">
        <Header />
        <div className="container">
          <WeatherSide />
          <InfoSide />
        </div>
        <Footer />
      </div>
    </WeatherDataProvider>
  )
};

export default App;
