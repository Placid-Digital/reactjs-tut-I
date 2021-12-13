import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import reportWebVitals from './reportWebVitals';
// import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/enquiry.css";
import "./css/font-awesome.min.css";
import "./css/framework.css";
import "./css/layout.css";
import "./css/login.css";
import "./css/mycreate.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.css";
import "./css/reg.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fontawesome-webfont.eot';
import './fonts/fontawesome-webfont.svg';
import './fonts/fontawesome-webfont.ttf';
import './fonts/fontawesome-webfont.woff';
import './fonts/fontawesome-webfont.woff2';
import 'bootstrap/dist/css/bootstrap.css';


import "./css/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Enquiry,
  Indexo,
  Login,
  Registration,
} from "./component";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/" element={<Indexo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
