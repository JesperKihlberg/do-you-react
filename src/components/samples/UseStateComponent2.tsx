import { Chip } from "@material-ui/core"; //trim
import React, { useEffect, useState } from "react"; //trim
//trim
const UseStateComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("a");
    count < 1 && setCount((count) => count + 1);
  });
  console.log("b");
  return <Chip label={"Hello React " + count} />;
};
//trim
export default UseStateComponent; //trim
//trim
