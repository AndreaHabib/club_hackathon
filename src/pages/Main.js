import "../components/layout/NavBar";
import {
  NavBar,
  LandingPage,
  About,
  Membership,
  Events,
  Contact,
  Footer,
} from "../components/index";
import "./styles/Main.css";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="App"
    >
      <header className="App-header">
        <NavBar />
        <LandingPage />
        <About />
        <Membership />
        <Events />
        <Contact />
        <Footer />
      </header>
    </motion.div>
  );
}

export default Main;
