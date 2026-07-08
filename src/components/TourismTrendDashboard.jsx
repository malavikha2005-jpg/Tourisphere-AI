import React, {
  useEffect,
  useState,
} from "react";

import {
  getDestinationStats,
} from "../services/analyticsService";

const TourismTrendDashboard = () => {
  const [destinations, setDestinations] =
    useState({});

  useEffect(() => {
    setDestinations(
      getDestinationStats()
    );
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Tourism Trend Dashboard
      </h2>

      {Object.keys(destinations)
        .length === 0 ? (
        <p>No destination data yet</p>
      ) : (
        <div className="space-y-3">

          {Object.entries(
            destinations
          )
            .sort(
              (a, b) =>
                b[1] - a[1]
            )
            .map(
              ([name, count]) => (
                <div
                  key={name}
                  className="flex justify-between bg-gray-100 p-3 rounded-lg"
                >
                  <span>
                    {name}
                  </span>

                  <span className="font-bold">
                    {count} Views
                  </span>
                </div>
              )
            )}

        </div>
      )}

    </div>
  );
};

export default TourismTrendDashboard;