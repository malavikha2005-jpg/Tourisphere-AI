import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Recommendation from "./pages/Recommendation";

function App() {
  const [activePage, setActivePage] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h1 className="text-3xl font-bold mb-8">
          Tourisphere
        </h1>

        <div className="space-y-3">

          <button
            onClick={() => setActivePage("overview")}
            className={`w-full text-left px-4 py-3 rounded-lg ${
              activePage === "overview"
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => setActivePage("recommendation")}
            className={`w-full text-left px-4 py-3 rounded-lg ${
              activePage === "recommendation"
                ? "bg-black text-white"
                : "bg-gray-100"
            }`}
          >
            Recommendation
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-100">
            Forecasting
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-100">
            Segmentation
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-100">
            Sentiment
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-100">
            Dataset
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {activePage === "overview" && <Dashboard />}

        {activePage === "recommendation" && <Recommendation />}

      </div>

    </div>
  );
}

export default App;