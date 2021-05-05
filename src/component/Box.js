import React from "react";
import "./box.css";

function Box(props) {
  return (
    <div className="box">
      <div className="img__p">
      <img src={props.image} alt="x-phone" />

        <div className="para__l">
            <h3>{props.title}</h3>
         {props.description}
        </div>
      </div>
    </div>
  );
}

export default Box;
