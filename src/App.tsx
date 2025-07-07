import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:scale-110 transition-transform"
        >
          <img
            src={reactLogo}
            className="h-24 w-24 animate-spin"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Vite + React + TailwindCSS
      </h1>

      <Card className="bg-blue-50 border-blue-300">
        <h2 className="text-xl font-semibold text-blue-800 mb-2">
          TailwindCSS Card Example
        </h2>
        <p className="text-blue-600">
          This card uses the `card m-5 p-4` classes from TailwindCSS to test the
          installation!
        </p>
      </Card>

      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors mb-4
          cursor-pointer"
        >
          count is {count}
        </button>
        <p className="text-gray-600 text-center">
          Edit{" "}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 mt-8 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
