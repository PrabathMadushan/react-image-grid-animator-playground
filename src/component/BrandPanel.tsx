import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./styles.scss";
import { useInterval } from "./useInterval/useInterval";

interface IProps {
  images: string[];
  visibleCount: number;
  interval: number;
  animationItemcount?: number;
  randomized?: boolean;
  isActive?: boolean;
}

interface IItem {
  image: string;
}

const BrandPanel = (props: IProps) => {
  const [visibles, setVisibles] = useState<IItem[]>([]);
  const [invisibles, setInvisibles] = useState<IItem[]>([]);

  const { isActive: isActiveProp } = props;

  useEffect(() => {
    const items: IItem[] = props.images.map((image) => ({ image }));
    const invs: IItem[] = [];
    const vs: IItem[] = [];

    items.forEach((item) => {
      if (vs.length >= props.visibleCount) {
        invs.push(item);
      } else {
        vs.push(item);
      }
    });
    setVisibles(vs);
    setInvisibles(invs);
  }, [props.images, props.visibleCount]);

  const { start, stop } = useInterval(() => {
    if (visibles.length === props.visibleCount) {
      const r1 = Math.abs(Math.floor(Math.random() * visibles.length));
      const r2 = Math.abs(Math.floor(Math.random() * invisibles.length));
      console.log(r1, r2);
      const i1 = visibles[r1];
      const i2 = invisibles[r2];
      visibles[r1] = i2;
      invisibles[r2] = i1;
      setVisibles([...visibles]);
      setInvisibles([...invisibles]);
    }
  }, props.interval);

  useEffect(() => {
    if (isActiveProp) {
      start();
    } else {
      stop();
    }
  }, [isActiveProp, start, stop]);

  return (
    <div>
      <div className="brand-animation-wraper">
        {visibles.map((item, index) => (
          <Item key={index} image={item.image} />
        ))}
      </div>
    </div>
  );
};

BrandPanel.defaultProps = {
  animationItemcount: -1,
  randomized: true,
  isActive: true,
};

export default BrandPanel;
