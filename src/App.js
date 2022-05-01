import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";
import { useRef } from "react";
import { Home } from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About2";
import Events from "./sections/Events";
import Footer from "./sections/Footer";
import Team from "./sections/Team";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
          <AnimatePresence>
          <main data-scroll-container ref={containerRef}
          style={{backgroundColor: '#FEA65C'}}
          >
            <Home />
            <About />
            <Events />
            <Team />
            <Footer />
          </main>
          </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
