import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from './Frontend/containers/HomePage/HomePage';
import ScrollToTop from './Frontend/components/ScrollToTop';

function App() {

  React.useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  return (
    <ScrollToTop>
      <HomePage />
    </ScrollToTop>
  );
}

export default App;
