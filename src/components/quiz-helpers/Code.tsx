import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

interface CodeProps {
  codeRequestInfo: RequestInfo;
}
const Code: React.FC<CodeProps> = ({ codeRequestInfo: codeText }) => {
  const [state, setState] = useState<{ componentText?: string | null }>({ componentText: null });
  useEffect(() => {
    setState({ componentText: null });
    fetch(codeText)
      .then((r) => r.text())
      .then((text) => {
        setState({ componentText: text });
      });
  }, [setState]);

  return state.componentText ? (
    <div style={{ fontFamily: "Consolas" }}>
      <CopyBlock language={"jsx"} text={state.componentText} showLineNumbers={true} theme={dracula} wrapLines={true} codeBlock />
    </div>
  ) : null;
};

export default Code;
