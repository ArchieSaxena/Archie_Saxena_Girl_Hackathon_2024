import React from "react";
import classes from "./FrontPage.module.css";
import { motion } from "framer-motion";
export default function FrontPage() {
  return (
    <>
      <motion.div
        className={classes.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={classes.innercontainer}>
          <motion.div
            className={classes.data}
            initial={{ x: -30 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className={classes.heading}>Medical</p>
            <p className={classes.heading}>Assistant</p>
            <div className={classes.y}>
              <div className={classes.innerData}>
                Empower yourself with reliable health information.
              </div>
              <div className={classes.innerData}>
                Explore symptoms, understand diseases, and learn what actions to
                take for better well-being.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
