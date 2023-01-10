import { useState, useEffect } from "react";

type useDynamicTransitionProps = {
  increment: number;
  delay: number;
  length: number;
};

export const useDynamicTransition = ({
  increment,
  delay,
  length,
}: useDynamicTransitionProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((storedIndex) => {
        return (storedIndex + increment) % length;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay, increment, length]);

  return index;
};
