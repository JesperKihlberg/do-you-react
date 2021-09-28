import { Chip } from "@material-ui/core"; //trim
import React, { useEffect } from "react"; //trim
import SampleProps from "../sample-helpers/SampleProps"; //trim
//trim
interface PlainProps extends SampleProps {} //trim
//trim
const simpleFunctionalComponent: React.FC<PlainProps> = (props) => {
  useEffect(() => {
    props.log("a");
    return () => props.log("b");
  });
  useEffect(() => {
    props.log("d");
  }, []);
  props.log("c");
  return <Chip label="Hello React" />;
};
//trim
export default simpleFunctionalComponent; //trim
//trim
