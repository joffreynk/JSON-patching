import React from "react";

const CreatePath = ({ pathProps }) => {
  const { jsonPatch, setJsonPatch, jsonObject } = pathProps;
  switch (jsonPatch.op) {
    case "add":
      return <div>Add</div>;
      break;
    case "copy":
      return <div>Copy</div>;
      break;
    case "move":
      return <div>MOve</div>;
      break;
    case "replace":
      return <div>Replace</div>;
      break;
    case "remove":
      return <div>Remove</div>;
      break;
    case "test":
      return <div>Test</div>;
      break;
  }
};

export default CreatePath;
