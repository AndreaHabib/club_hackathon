import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Hacks from "./pages/Hacks";
import { AnimatePresence } from "framer-motion";
import { BeachBall } from "./pages/hacks/index";
/* How to set up your hack
 * 1. go to pages/hacks and add your hack js file(if you don't have one make a blank one)
 * 2. sign your hack with your name(optional)
 * 2. import it in pages/hacks/index.js
 * 3. add a route with whatever path name you want
 * 4. got to pages/Hacks.js and follow the instructions
 */

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {/* All routes are lower case. */}
        <Route exact path="/" component={Main} />
        <Route exact path="/hacks" component={Hacks} />
        <Route exact path="/beach-ball" component={BeachBall} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
