import React, { lazy, Suspense, useEffect } from 'react';
import Header from './components/header/Header';





const App = () => {



  return <Suspense fallback={<div>looding</div>}>
    <Header/>
  </Suspense>
};


export default App;
