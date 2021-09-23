import React, { useEffect } from "react";

interface PlainProps {
  log: (message: string) => void;
}
const simpleFunctionalComponent: React.FC<PlainProps> = (props) => {
  useEffect(() => {
    props.log("a");
    return () => props.log("b");
  });
  useEffect(() => {
    props.log("d");
  }, []);
  props.log("c");
  console.log({ ...props });
  return <span>Hello</span>;
};

export default simpleFunctionalComponent;
