import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/BeachBall.css";

//Beach ball hack by Prince Addo

const BeachBall = () => {
  console.log(
    "  _____      _                              _     _       \n |  __ \\    (_)                    /\\      | |   | |      \n | |__) | __ _ _ __   ___ ___     /  \\   __| | __| | ___  \n |  ___/ '__| | '_ \\ / __/ _ \\   / /\\ \\ / _` |/ _` |/ _ \\ \n | |   | |  | | | | | (_|  __/  / ____ \\ (_| | (_| | (_) |\n |_|   |_|  |_|_| |_|\\___\\___| /_/    \\_\\__,_|\\__,_|\\___/ \n                                                          \n"
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container"
    >
      <Link to="/hacks" className="btn btn-primary mt-4 mx-3">
        Back
      </Link>
      <div className="ballContainer">
        <motion.div
          className="ball"
          drag
          dragConstraints={{
            right: 500,
            left: -80,
            top: -150,
            bottom: 500,
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default BeachBall;
