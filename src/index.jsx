import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import MyForm from './components/myForm/MyForm';
// import Lesson02 from './lessons/lesson_02/Lesson02';
//import Lesson01 from './lessons/lesson_01/Lesson01';
//import Homework02 from './homeworks/homeworks2/Homework02';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
  <App/>  
  {/* <Lesson02/> */}
  <MyForm/>
 {/*<Lesson01 />*/}
  {/*<Homework02 />*/}
 </>

);


