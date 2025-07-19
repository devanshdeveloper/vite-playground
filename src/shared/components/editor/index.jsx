import React from "react";
import JSONFile from "./files/JSONFile";

function Editor({ title = "Editor", value, onChange, result }) {
  return (
    <div>
      <div className="h-16 flex items-center pl-16">{title}</div>
      <div className="flex">
        <div className="w-full">
          <JSONFile fileName={"program.json"} value={value} onChange={onChange} />
        </div>
        <div className="w-full">{result}</div>
      </div>
    </div>
  );
}

export default Editor;
