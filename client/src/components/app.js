
import React from 'react';
import Footer from './footer';
import Header from './header';
import MainContent from './mainContent';

function App(){
  return(
    <div className='flex flex-col h-screen max-h-screen font-serif text-white'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;