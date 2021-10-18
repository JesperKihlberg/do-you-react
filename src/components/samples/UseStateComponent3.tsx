import { Chip } from "@material-ui/core"; //trim
import React, { useEffect, useState } from "react"; //trim
//trim
const UseStateComponent3: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("a");
    setCount((count) => count);
  });
  console.log("b");
  return <Chip label={"Hello React " + count} />;
};
//trim
export default UseStateComponent3; //trim
//trim
