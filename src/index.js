import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile';
import NotFound404 from './components/NotFound404';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <>
    <BrowserRouter>
    <NavBar />

      <Routes>

        <Route path="/" element={
          <Provider store={store}>
              <App />
          </Provider>
        } />
        
        <Route path="profile/:username" element={
          <Provider store={store}>
            <Profile />
          </Provider>
        } />
        
        <Route path="*" element={<NotFound404 />} />

      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </>  
  ,
  document.getElementById('root')
);
