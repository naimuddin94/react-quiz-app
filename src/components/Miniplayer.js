import React from "react";
import img from "../assets/images/3.jpg";
import classes from "../styles/Miniplayer.module.css";

export default function Miniplayer() {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>
        {" "}
        close{" "}
      </span>
      <img src={img} alt="Alt tag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
