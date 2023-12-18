'use client'

import { useState } from "react"
import Operation from "./operation";
import CreatePath from "./CreatePath";

const Patchform = () => {
  const [jsonObject, setjsonObject] = useState({
    foo: [1, 2, 3],
    bar: [4, 5, 6],
  });
  const [jsonPatch, setJsonPatch] = useState({
    op: "",
    path: "",
    value: "",
    from: "",
  });

  return (
    <div>
      <Operation jsonPatch={jsonPatch} setJsonPatch={setJsonPatch} />

      {  jsonPatch.op && (
        <CreatePath pathProps={{ jsonPatch, setJsonPatch, setjsonObject, jsonObject }} />
      )}

      <div className="pt-7">
        <button
          className="flex justify-center p-3 bg-red-600 rounded-full  text-white text-2xl"
          type="button"
          onClick={() => {
            setJsonPatch({
              op: "",
              path: "",
              value: "",
              from: "",
            });
          }}
        >
          Clear Operations
        </button>
      </div>
    </div>
  );
}

export default Patchform
