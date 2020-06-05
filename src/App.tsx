import * as React from "react";
import * as DropZone from 'react-dropzone'
import * as Recoil from "recoil"

import "./styles.css";

export default function App() {
  const drop = DropZone.useDropzone(

  )
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
