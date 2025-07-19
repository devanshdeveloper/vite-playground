import { useState } from "react";
import Editor from "../shared/components/editor";
import JSONResult from "../shared/components/editor/results/JSONResult";
import LangJSON from ".";

const langJSON = new LangJSON();

function LangJSONEditor() {
  const [JSONValue, setJSONValue] = useState({
    program: {
      "{{#each products}}": {
        name: "{{#var item.productName}}",
      },
    },
    data: {
      products: [
        {
          productName: "Shoes XXL",
        },
      ],
    },
  });

  const result = langJSON.applyTemplate(JSONValue.program, JSONValue.data);

  console.log({result});
  

  return (
    <Editor
      title="Lang JSON editor"
      value={JSONValue}
      onChange={setJSONValue}
      result={<JSONResult value={result} />}
    />
  );
}

export default LangJSONEditor;
