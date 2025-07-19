import { JsonEditor } from "json-edit-react";
import React from "react";

function JSONResult({ value }) {
  return <JsonEditor data={value} />;
}

export default JSONResult;
