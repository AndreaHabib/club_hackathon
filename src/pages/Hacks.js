import React from "react";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import "./styles/Hacks.css";
/** Adding your own hack rules
 * 1. All hacks go inside the div with the className grid
 * 2. All hacks will be wrapped in a div with the className gridCotaniner
 * 3. All hacks will have an image and a quick description
 * 4. Images should use the gridImage className, but you can choose otherwise
 * 5. Text should use the gridText className, but you can choose otherwise
 * 6. It is mendatory that you add an onClick method that pushes your the link you created on App.js
 * 7. Enjoy
 */

const Hacks = () => {
  const history = useHistory();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/" className="btn btn-primary mt-3 mx-3">
        Back
      </Link>
      <div className="grid">
        <div className="gridContainer">
          <img
            src="https://pixy.org/src/457/4579564.png"
            alt="beach ball"
            className="gridImage"
            onClick={() => {
              history.push("/beach-ball");
            }}
          />
          <p className="gridDescription">
            Move around a beach ball using framer motion
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hacks;
