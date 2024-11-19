import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import Comment from './components/step03/Comment';
import CommentList from './components/step03/CommentList';
import Welcome from './components/step03/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  // 렌더링: 화면단 만드는 거
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/>  */}
    <CommentList />
    <Welcome name='hong' />
    <Welcome name='park' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
