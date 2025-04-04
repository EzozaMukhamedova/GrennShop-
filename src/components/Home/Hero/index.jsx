import React from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  const counter = useSelector((state) => state.counter.value);
  console.log(counter);

  return <div>Counter: {counter}</div>;
};

export default Hero;
