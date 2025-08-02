import React from 'react'
import Navbar from './components/Navbar.jsx';
import Work from './components/Work.jsx';
import Stripes from './components/Stripes.jsx';

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 font-['satoshi'] text-white">
      <Navbar></Navbar>
      <Work></Work>
      <Stripes></Stripes>
    </div>
  )
}

export default App