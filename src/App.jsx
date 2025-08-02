import React from 'react'
import Navbar from './components/Navbar.jsx';
import Work from './components/Work.jsx';

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 font-['satoshi'] text-white">
      <Navbar></Navbar>
      <Work></Work>
    </div>
  )
}

export default App