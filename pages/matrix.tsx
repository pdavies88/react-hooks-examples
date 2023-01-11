import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import MATRIX_FRAMES from "../data/matrix";
import { useDynamicTransition } from "../hooks/useDynamicTransition";

const minimumDelay = 10;
const minimumIncrement = 1;

function Matrix() {
  const [delay, setDelay] = useState(500);
  const [increment, setIncrement] = useState(5);

  const index = useDynamicTransition({
    delay,
    increment,
    length: MATRIX_FRAMES.length,
  });

  const updateDelay = (event: ChangeEvent<HTMLInputElement>) => {
    const delay = Number(event.target.value);

    setDelay(delay < minimumDelay ? minimumDelay : delay);
  };

  const updateIncrement = (event: ChangeEvent<HTMLInputElement>) => {
    const increment = Number(event.target.value);

    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  };

  return (
    <>
      <Image src={MATRIX_FRAMES[index]} alt="matrix-animation" />
      <div>
        <div>
          Frame transition delay (seconds):
          <input type="number" onChange={updateDelay} />
        </div>
        <div>
          Frame increment:
          <input type="number" onChange={updateIncrement} />
        </div>
      </div>
    </>
  );
}

export default Matrix;
