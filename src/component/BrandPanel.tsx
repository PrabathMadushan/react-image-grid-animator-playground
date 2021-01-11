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
    const items: IItem[] = props.images.map((image, index) => ({
      image,
    }));
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
      const oneTimeCount = props.randomized
        ? Math.abs(Math.floor(Math.random() * invisibles.length) + 1)
        : (props.animationItemcount || 5) > 5
        ? 5
        : props.animationItemcount || 5;
      console.log(oneTimeCount);
      let r_array01 = [],
        r_array02 = [];
      for (let i: number = 0; i < visibles.length; i++) r_array01.push(i);
      for (let i: number = 0; i < invisibles.length; i++) r_array02.push(i);
      shuffleArray(r_array01);
      shuffleArray(r_array02);
      // console.log(r_array01, r_array02);
      for (let i: number = 0; i < oneTimeCount; i++) {
        const r1 = r_array01[i];
        const r2 = r_array02[i];
        // console.log(r1, r2);
        const i1 = visibles[r1];
        const i2 = invisibles[r2];
        visibles[r1] = i2;
        invisibles[r2] = i1;
      }
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

  const shuffleArray = (array: number[]): number[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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
