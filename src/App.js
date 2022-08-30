import './App.css';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
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
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <header>Text Field Tester </header>
        <br></br>
        <header>News </header>
        <br></br>
        <News/>
      </div>
    </Router>
  );
}

export default App;
