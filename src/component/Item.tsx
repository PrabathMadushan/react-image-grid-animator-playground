import React, { useEffect, useState } from "react";
import "./styles.scss";

interface IProps {
  image: string;
}

const Item = (props: IProps) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
    </div>
  );
};

export default Item;
