import React, { useEffect, useState } from "react";
import "./styles.scss";

interface IProps {
  image: string;
}

const Item = (props: IProps) => {
  const { image } = props;
  const [show, setShow] = useState(false);
  const [imageStste, setImageState] = useState(props.image);
  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setImageState(image);
      setShow(true);
    }, 500);
  }, [image]);

  return (
    <div className={show ? "item show" : "item hide"}>
      <img src={imageStste} alt="" />
    </div>
  );
};

export default Item;
