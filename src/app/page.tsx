"use client";
import { use, useState } from "react";

function CalculateButton(props: {
  title: string;
  operation: string;
  input1: number;
  input2: number;
  setResult: (result: number) => void;
  result: number;
}) {
  function handleClick(operation: string) {
    if (operation == "+") {
      props.setResult(props.input1 + props.input2);
    } else if (operation == "-") {
      props.setResult(props.input1 - props.input2);
    } else if (operation == "*") {
      props.setResult(props.input1 * props.input2);
    } else if (operation == "/") {
      props.setResult(props.input1 / props.input2);
    }
  }
  return (
    <button
      onClick={() => {
        handleClick(props.operation);
      }}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {props.title}
    </button>
  );
}

export default function Calculate() {
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState("+");

  return (
    <>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Input 1:
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={input1}
            onChange={(e) => setInput1(Number(e.target.value))}
          />
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Input 2:
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={input2}
            onChange={(e) => setInput2(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select an operation:
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value={"+"}>Sum</option>
            <option value={"-"}>Subtract</option>
            <option value={"*"}>Multiply</option>
            <option value={"/"}>Divide</option>
          </select>
        </label>
      </div>
      <div>
        <CalculateButton
          title="Calculate"
          operation={operation}
          input1={input1}
          input2={input2}
          setResult={setResult}
          result={result}
        />
      </div>
      <div>
        <p className="text-3xl font-semibold text-white-900 w-full">
          The result is: {result}
        </p>
      </div>
    </>
  );
}
