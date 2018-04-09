import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Counter interval={1} />, document.getElementById('root'));