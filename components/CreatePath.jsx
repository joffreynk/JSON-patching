import { getkeys } from "@/utils/utils";
import React, { useState } from "react";

const CreatePath = ({ pathProps }) => {
  const { jsonPatch, setJsonPatch, jsonObject } = pathProps;
  const [wantToAddtoRoot, setwantToAddtoRoot] = useState(null);
  const [fullPath, setFullPath] = useState([]);
  const [possiblePaths, setPossiblePaths] = useState(jsonObject);
  const [singlePath, setSinglePath] = useState(getkeys(possiblePaths)[0]);

  if (jsonPatch.op === "add") {
    return (
      <div>
        {wantToAddtoRoot === null && (
          <div>
            <h3>Do you want to want to add to the root?</h3>
            <div className="flex gap-4">
              <button
                type="button"
                className="btn w-fit p-4 btn-primary"
                onClick={() => setwantToAddtoRoot("ego")}
              >
                yes
              </button>
              <button
                className="btn w-fit p-4 btn-primary"
                type="button"
                onClick={() => setwantToAddtoRoot("oya")}
              >
                No
              </button>
            </div>
          </div>
        )}

        {wantToAddtoRoot === "ego" && (
          <div className="flex flex-col">
            <h4>enter the key to add</h4>

            <input
              type="text"
              onChange={(e) => setSinglePath(e.target.value)}
              placeholder="foo"
              className="border text-base px-4 py-2 rounded-md"
            />

            <button
              className="btn w-fit p-4 btn-primary"
              type="button"
              onClick={() => {
                setJsonPatch([{ ...jsonPatch, path: `/${singlePath}` }]);
              }}
            >
              Finish
            </button>
          </div>
        )}

        {wantToAddtoRoot === "oya" && getkeys(possiblePaths).length > 0 && (
          <>
            <div className="flex flex-col gap-3">
              <h4 className="text-1xl">choose the key to add to</h4>
              <select
                className="select select-accent border bg-slate-100 text-xl rounded-lg p-1 w-full max-w-xs"
                onChange={(e) => setSinglePath(e.target.value)}
              >
                {getkeys(possiblePaths).map((value, i) => (
                  <option key={value} className="" value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <button
                className="btn w-fit p-4 btn-primary"
                type="button"
                onClick={() => {
                  setFullPath([...fullPath, singlePath]);
                  setPossiblePaths(possiblePaths[singlePath]);
                }}
              >
                add path
              </button>
            </div>

            <button
              className="btn w-fit p-4 btn-primary"
              type="button"
              onClick={() => {
                setJsonPatch([
                  {
                    ...jsonPatch,
                    path: `/${fullPath.join("/")}`,
                  },
                ]);
              }}
            >
              Finish
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-20 justify-between">
      {getkeys(possiblePaths).length > 0 && (
        <div className="flex flex-col gap-3">
          <h4 className="text-1xl">choose the path key to {jsonPatch.op}</h4>
          <select
            className="select select-accent border bg-slate-100 text-xl rounded-lg p-1 w-full max-w-xs"
            onChange={(e) => setSinglePath(e.target.value)}
          >
            {getkeys(possiblePaths).map((value, i) => (
              <option key={value} className="" value={value}>
                {value}
              </option>
            ))}
          </select>
          <button
            className="btn w-fit p-4 btn-primary"
            type="button"
            onClick={() => {
              setFullPath([...fullPath, singlePath]);
              setPossiblePaths(possiblePaths[singlePath]);
            }}
          >
            add path
          </button>
        </div>
      )}
      <button
        className="btn w-fit p-4 btn-primary"
        type="button"
        onClick={() => {
          setJsonPatch([{ ...jsonPatch, path: `/${fullPath.join("/")}` }]);
        }}
      >
        Finish
      </button>
    </div>
  );
};

export default CreatePath;
