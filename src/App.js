import React from 'react';
import Manhattan from './components/Manhattan/index';
import CategotiesBtns from './components/Categories/index';
import './sass/styles.scss';

function App() {
  return (
    <div className="App">
      <Manhattan/>
      <CategotiesBtns />
    </div>
  );
}

export default App;
