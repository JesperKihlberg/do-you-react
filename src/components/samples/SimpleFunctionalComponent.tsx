import { Chip } from "@material-ui/core"; //trim
import React, { useEffect } from "react"; //trim
//trim
const SimpleFunctionalComponent: React.FC = () => {
  useEffect(() => {
    console.log("a");
    return () => console.log("b");
  });
  useEffect(() => {
    console.log("d");
  }, []);
  console.log("c");
  return <Chip label="Hello React" />;
};
//trim
export default SimpleFunctionalComponent; //trim
//trim
