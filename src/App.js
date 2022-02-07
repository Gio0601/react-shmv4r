import React from 'react';
import './style.css';
import Header from './Header';
import NameList from './NameList';

export default function App() {
  return (
    <div>
      <Header />
      <NameList />
      <h1 className="title">Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
