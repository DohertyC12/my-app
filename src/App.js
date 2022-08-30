import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import { ScatterGeoFrag } from './pages/ScatterGeo';
import { SimpleMap } from './pages/GooglyMap';
import { RGJson } from './pages/ReactGJson';
import { TextFieldBasicExampleWrapper } from './pages/TextF';
import { Content } from './pages/ThemeEx';
import News from './pages/News/News';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <header>News </header>
        <br></br>
        <News/>
        <Route path="/SimpleMap" component={SimpleMap} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
