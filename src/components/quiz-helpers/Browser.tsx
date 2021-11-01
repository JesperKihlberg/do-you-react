import React from "react";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { Close, Crop169, Remove, NavigateBefore, NavigateNext, Refresh, Devices, Input, Settings, MoreVert } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  mainWindow: {
    border: "1px solid #cecece",
    width: "100%",
    height: "100%",
    // height: "500px",
    backgroundColor: "#f9f9f9",
    boxShadow: theme.shadows[4],
    display: "flex",
    flexDirection: "column",
  },
  topBar: {
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "spaceBetween",
  },
  buttons: {
    flex: "1 0 auto",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    margin: "0 8px",
    "& svg": { fontSize: "1.2em", color: "#4e4e4e" },
  },
  buttonsEnd: {
    justifyContent: "end",
  },
  input: {
    border: "1px solid #cecece",
    borderRadius: "6px",
    padding: "6px",
    margin: "2px",
    flex: "4 0 auto",
  },
  addressInput: {
    flex: "1 4 auto",
  },
  content: {
    flex: "4 1 auto",
    borderTop: "1px solid #cecece",
    backgroundColor: "white",
    padding: "20px",
  },
  log: {
    flex: "3 1 auto",
    borderTop: "1px solid #cecece",
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "column",
  },
  logFirstButtons: {
    flex: "0 0 auto",
  },
  tabs: {
    display: "flex",
    flex: "8 1 auto",
    justifyContent: "start",
    overflow: "hidden",
    "& div": {
      padding: "4px",
      font: "menu",
      width: "70px",
      textAlign: "center",
    },
  },
  selectedTab: {
    borderBottom: "2px solid #386cff",
  },
  logContent: {
    flex: "2 1 auto",
    borderTop: "1px solid #cecece",
    backgroundColor: "white",
    fontFamily: "monospace",
    "& div": {
      padding: "2px 24px",
      borderBottom: "1px solid #f1f1f1",
      "& span": {
        float: "right",
      },
    },
  },
}));

interface BrowserProps {
  logMessages?: string[];
}
const Browser: React.FC<BrowserProps> = ({ children, logMessages }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainWindow}>
      <div className={classes.topBar}>
        <div className={classes.buttons}>
          <NavigateBefore />
          <NavigateNext />
          <Refresh />
        </div>
        <input className={classes.input} type="text" defaultValue="localhost:9000" />
        <div className={clsx(classes.buttons, classes.buttonsEnd)}>
          <Remove />
          <Crop169 />
          <Close />
        </div>
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.log}>
        <div className={classes.topBar}>
          <div className={classes.buttons}>
            <Input />
            <Devices />
          </div>
          <div className={classes.tabs}>
            <div>Elements</div>
            <div className={classes.selectedTab}>Console</div>
            <div>Sources</div>
            <div>Network</div>
            <div>Performance</div>
            <div>Memory</div>
          </div>
          <div className={clsx(classes.buttons, classes.buttonsEnd)}>
            <Settings />
            <MoreVert />
            <Close />
          </div>
        </div>
        <div className={classes.logContent}>
          {logMessages?.slice(0, 10)?.map((logMessage, index) => (
            <div key={index}>
              {logMessage}
              <span>index.js:112</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browser;
