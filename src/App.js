import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from './Frontend/containers/HomePage/HomePage';

function App() {

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
