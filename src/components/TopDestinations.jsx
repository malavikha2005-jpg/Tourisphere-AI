export default function TopDestinations() {
  const destinations = [
    "Santorini",
    "Maldives",
    "Phuket",
    "Barcelona",
    "Reykjavik"
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="font-semibold text-xl mb-4">
        Top Destinations
      </h3>

      {destinations.map((place, index) => (
        <div
          key={index}
          className="flex justify-between py-3 border-b"
        >
          <span>{place}</span>
          <span>{500 - index * 20} visitors</span>
        </div>
      ))}
    </div>
  );
}