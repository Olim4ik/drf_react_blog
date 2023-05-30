import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
// import * as ServiceWorker from './ser'

 
// const routing = (
// 	<Router>
// 		<React.StrictMode>
// 			<Header />
// 			<Routes>
// 				<Route exact path="/" component={App} />
// 			</Routes>
// 			<Footer />
// 		</React.StrictMode>
// 	</Router>
// );


// ReactDOM.render(routing, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
