import VisitorsRevenueChart from "../components/VisitorsRevenueChart";
import TopDestinations from "../components/TopDestinations";
import SourceCountriesChart from "../components/SourceCountriesChart";
import TravelPurposeChart from "../components/TravelPurposeChart";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      

      <div className="flex-1 p-12 overflow-auto">

        {/* Header */}
        <p className="text-orange-500 tracking-widest text-sm">
          BIG DATA • REAL TIME
        </p>

        <h1 className="text-5xl font-bold mt-2">
          Tourism Intelligence,
          <br />
          at a glance.
        </h1>

        <p className="text-gray-500 mt-4 mb-10">
          A unified analytics layer fusing tourism data,
          ML forecasts and sentiment insights.
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-400 uppercase text-xs">
              Total Visitors
            </p>

            <h2 className="text-4xl font-bold mt-2">
              5,000
            </h2>

            <p className="text-gray-500 mt-2">
              Across all destinations
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-400 uppercase text-xs">
              Revenue (USD)
            </p>

            <h2 className="text-4xl font-bold mt-2">
              $29.4M
            </h2>

            <p className="text-gray-500 mt-2">
              Aggregate spend tracked
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-400 uppercase text-xs">
              Avg Rating
            </p>

            <h2 className="text-4xl font-bold mt-2">
              3.86
            </h2>

            <p className="text-gray-500 mt-2">
              Out of 5
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <p className="text-gray-400 uppercase text-xs">
              Sentiment Score
            </p>

            <h2 className="text-4xl font-bold mt-2">
              62.5%
            </h2>

            <p className="text-gray-500 mt-2">
              Positive reviews
            </p>
          </div>

        </div>

        {/* Visitors Chart + Top Destinations */}
        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="col-span-2">
            <VisitorsRevenueChart />
          </div>

          <div>
            <TopDestinations />
          </div>

        </div>

        {/* Source Countries + Travel Purpose */}
        <div className="grid grid-cols-3 gap-6 mt-10">

          <div className="col-span-2">
            <SourceCountriesChart />
          </div>

          <div>
            <TravelPurposeChart />
          </div>

        </div>

      </div>
    </div>
  );
}