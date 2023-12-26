import React from 'react'
import { Header } from './components/Header.js';
import { Gameboard } from './components/Gameboard.js';
// import { Menu } from './components/Menu.js';

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Gameboard />
    </div>
  )
}
