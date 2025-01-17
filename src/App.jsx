import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';
import React from 'react';


// Main App Component
function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
