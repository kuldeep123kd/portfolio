import { useEffect } from "react";

/* *** This Function is used to scroll the page to top when new page renders *** */

function ScrollToTop({ children }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
}

export default ScrollToTop;