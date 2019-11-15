import React from 'react';
import Header from './components/search/index';
import Manhattan from './components/Manhattan/index';
import CategotiesBtns from './components/Categories/index';
import './sass/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Manhattan/>
      <CategotiesBtns />
    </div>
  );
}

export default App;
