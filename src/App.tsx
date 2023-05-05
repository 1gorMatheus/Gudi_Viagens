import React from 'react';
import './styles/global.scss';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer';
import Main from './componentes/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
