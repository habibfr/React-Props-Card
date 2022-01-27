import React from "react";
import Avatar from "./Avatar";
import Tel from "./Tel";
import Email from "./Email";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Tel detailTel={props.tel} />
        <Email detailEmail={props.email} />
      </div>
    </div>
  );
}

export default Card;
