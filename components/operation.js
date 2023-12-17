import { operations } from "@/utils/utils";

const Operation = ({ jsonPatch, setJsonPatch }) => {
  return (
    <>
      <h3>choose operation</h3>
      <div className="flex gap-2 ">
        {operations.map((operation) => (
          <button
            className={`p-5 border cursor-pointer  ${
              jsonPatch.op === operation && "bg-teal-600"
            }`}
            key={operation}
            onClick={() => {
              setJsonPatch({ ...jsonPatch, op: operation });
            }}
          >
            {operation}
          </button>
        ))}
      </div>
    </>
  );
};

export default Operation;
