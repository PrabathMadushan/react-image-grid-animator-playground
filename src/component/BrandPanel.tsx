import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./styles.scss";

interface IProps {
  images: string[];
  visibleCount: number;
}

interface Item {
  image: string;
}

const BrandPanel = (props: IProps) => {
  const [visibles, setVisibles] = useState<Item[]>([]);
  const [invisibles, setInvisibles] = useState<Item[]>([]);

  useEffect(() => {
    const items: Item[] = props.images.map((image) => ({ image }));
    const invs: Item[] = [];
    const vs: Item[] = [];

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

  useEffect(() => {
    const interval = setInterval(() => {
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
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = () => {
    const r1 = Math.abs(Math.floor(Math.random() * visibles.length));
    const r2 = Math.abs(Math.floor(Math.random() * invisibles.length));
    console.log(r1, r2);
    const i1 = visibles[r1];
    const i2 = invisibles[r2];
    visibles[r1] = i2;
    invisibles[r2] = i1;
    setVisibles([...visibles]);
    setInvisibles([...invisibles]);
    // setVisibles((ps) => {
    //   ps[r1] = i2;
    //   return [...ps];
    // });
    // setInvisibles((ps) => {
    //   ps[r2] = i1;
    //   return [...ps];
    // });
  };

  return (
    <div>
      <button onClick={(e) => animate()}>change</button>
      <div className="brand-animation-wraper">
        {visibles.map((item, index) => (
          <Item key={index} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default BrandPanel;
