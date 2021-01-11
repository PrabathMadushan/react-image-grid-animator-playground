import React from "react";
import "./styles.scss";

interface IProps {
  images: string[];
  visibleCount: number;
}

const BrandPanel = (props: IProps) => {
  const getRandomVisbaleImages = () => {};

  return (
    <div className="brand-animation-wraper">
      {new Array(props.visibleCount).fill("").map((item: any, index) => (
        <div className="item">
          <img src={props.images[index]} alt="" />
        </div>
      ))}
    </div>
  );
};

export default BrandPanel;
