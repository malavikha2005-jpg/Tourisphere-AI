import React from "react";

const DestinationModal = ({ destination, onClose }) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✖
        </button>

        {/* Image */}
        {destination.image ? (
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-72 object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-72 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-2xl">
            📍 No Image Available
          </div>
        )}

        <h2 className="text-3xl font-bold mb-3">
          {destination.name || "Unknown Destination"}
        </h2>

        <div className="space-y-2">

          <p>
            <strong>Country:</strong>{" "}
            {destination.country || "No data"}
          </p>

          <p>
            <strong>State:</strong>{" "}
            {destination.state || destination.city || "No data"}
          </p>

          <p>
            <strong>Budget:</strong>{" "}
            {destination.budget || "No data"}
          </p>

          <p>
            <strong>Climate:</strong>{" "}
            {destination.climate || "No data"}
          </p>

          <p>
            <strong>Rating:</strong>{" "}
            {destination.rating ? `⭐ ${destination.rating}` : "No data"}
          </p>

          <p>
            <strong>Popularity:</strong>{" "}
            {destination.popularity || "No data"}
          </p>

          <p>
            <strong>Safety Score:</strong>{" "}
            {destination.safetyScore || "No data"}
          </p>

          <p>
            <strong>Family Score:</strong>{" "}
            {destination.familyScore || "No data"}
          </p>

          <p>
            <strong>Average Cost:</strong>{" "}
            {destination.averageCost
              ? `₹${destination.averageCost}`
              : "No data"}
          </p>

          <p>
            <strong>Best Months:</strong>{" "}
            {destination.bestMonths?.join(", ") || "No data"}
          </p>

          <p>
            <strong>Interests:</strong>{" "}
            {destination.interests?.join(", ") || "No data"}
          </p>

          <p>
            <strong>Latitude:</strong>{" "}
            {destination.latitude || "No data"}
          </p>

          <p>
            <strong>Longitude:</strong>{" "}
            {destination.longitude || "No data"}
          </p>

        </div>

      </div>

    </div>
  );
};

export default DestinationModal;