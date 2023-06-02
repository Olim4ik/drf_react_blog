import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import SignUp from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Single from './components/single';
// import Search from './components/search';
// import * as ServiceWorker from './ser'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" Component={App} />
        <Route path="/register" Component={SignUp} />
        <Route path="/login" Component={Login} />
        <Route path="/logout" Component={Logout} />
        <Route path="/post/:slug" Component={Single} />
        {/* <Route path="/search" component={Search} /> */}
      </Routes>
      <Footer />
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
