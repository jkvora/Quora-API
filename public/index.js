import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
              var a = 5;

const Index = () => {
  return <div className={style.title}>Hello React ! My name is </div>;
};

ReactDOM.render(<Index />, document.getElementById('root'));
