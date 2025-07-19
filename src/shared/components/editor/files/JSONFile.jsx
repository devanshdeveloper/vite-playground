import { JsonEditor } from "json-edit-react";
import React from "react";

function JSONFile({ fileName, value, onChange }) {
  return (
    <div>
      <div className="w-full">{fileName}</div>
      <JsonEditor
        theme={{ styles: { container: { maxWidth: "100%" } } }}
        data={value}
        setData={onChange}
      />
      ;
    </div>
  );
}

export default JSONFile;
