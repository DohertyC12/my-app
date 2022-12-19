import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import { SimpleMap } from './pages/GooglyMap';
import HomePage from './pages/HomePage';
import MyForm from './pages/MyForm';
import News from './pages/News/News';
import Layout from './pages/Layout';
import {ThemeProviders} from './pages/ThemeProviders';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="myform" element={<MyForm />} />
            <Route path="simplemap" element={<SimpleMap />} />
            <Route path="news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
