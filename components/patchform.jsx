'use client'

import { useState } from "react"
import Operation from "./operation";
import CreatePath from "./CreatePath";

const Patchform = () => {
  const [jsonObject, setjsonObject] = useState({})
  const [jsonPatch, setJsonPatch] = useState({
    op: "",
    path: "",
    value: "",
    from: "",
  });

  return (
    <div>
      {!jsonPatch.op && (
        <Operation jsonPatch={jsonPatch} setJsonPatch={setJsonPatch} />
      )}

      {jsonPatch.op && (
        <CreatePath pathProps={{ jsonPatch, setJsonPatch, jsonObject }} />
      )}

      <div className="pt-7">
        <button
          className="flex justify-center p-3 bg-red-950  text-white text-2xl"
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
