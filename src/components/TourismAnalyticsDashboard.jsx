import React, { useEffect, useState } from "react";
import {
  getAnalytics,
  getTopDestination,
} from "../services/analyticsService";

const TourismAnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    const data = getAnalytics();
    setAnalytics(data);
  }, []);

  const getTopItem = (obj) => {
    if (!obj) return "No Data";

    const entries = Object.entries(obj);

    if (entries.length === 0)
      return "No Data";

    return entries.sort(
      (a, b) => b[1] - a[1]
    )[0][0];
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-8">

      <h2 className="text-2xl font-bold mb-4">
        Tourism Analytics Dashboard
      </h2>
      <div className="bg-red-100 p-4 rounded-lg">
        <h3 className="font-bold">
            Top Destination
            </h3>
            <p>
                {getTopDestination()}
                </p>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold">
            Top Budget
          </h3>

          <p>
            {getTopItem(
              analytics.budget
            )}
          </p>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="font-bold">
            Top Climate
          </h3>

          <p>
            {getTopItem(
              analytics.climate
            )}
          </p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-bold">
            Top Interest
          </h3>

          <p>
            {getTopItem(
              analytics.interest
            )}
          </p>
        </div>

        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold">
            Top Travel Type
          </h3>

          <p>
            {getTopItem(
              analytics.travelType
            )}
          </p>
        </div>

      </div>

    </div>
  );
};

export default TourismAnalyticsDashboard;