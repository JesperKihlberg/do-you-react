import { Chip } from "@material-ui/core"; //trim
import React, { useEffect, useState } from "react"; //trim
//trim
const UseStateComponent4: React.FC = () => {
  const [element, setCount] = useState({ count: 0 });
  const count = element.count;
  useEffect(() => {
    console.log("a");
    setCount((prev) => ({ count: prev.count }));
  }, [count]);
  console.log("b");
  return <Chip label={"Hello React " + count} />;
};
//trim
export default UseStateComponent4; //trim
//trim
