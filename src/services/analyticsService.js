export const updateAnalytics = (
  filters
) => {
  const analytics =
    JSON.parse(
      localStorage.getItem(
        "travelAnalytics"
      )
    ) || {
      budget: {},
      climate: {},
      travelType: {},
      interest: {},
    };

  if (filters.budget) {
    analytics.budget[
      filters.budget
    ] =
      (analytics.budget[
        filters.budget
      ] || 0) + 1;
  }

  if (filters.climate) {
    analytics.climate[
      filters.climate
    ] =
      (analytics.climate[
        filters.climate
      ] || 0) + 1;
  }

  if (filters.travelType) {
    analytics.travelType[
      filters.travelType
    ] =
      (analytics.travelType[
        filters.travelType
      ] || 0) + 1;
  }

  if (filters.interest) {
    analytics.interest[
      filters.interest
    ] =
      (analytics.interest[
        filters.interest
      ] || 0) + 1;
  }

  localStorage.setItem(
    "travelAnalytics",
    JSON.stringify(analytics)
  );
};

export const getAnalytics = () => {
  return (
    JSON.parse(
      localStorage.getItem(
        "travelAnalytics"
      )
    ) || {}
  );
};
export const updateDestinationViews = (
  destinationName
) => {
  const analytics =
    JSON.parse(
      localStorage.getItem(
        "travelAnalytics"
      )
    ) || {};

  if (!analytics.destinations) {
    analytics.destinations = {};
  }

  analytics.destinations[
    destinationName
  ] =
    (analytics.destinations[
      destinationName
    ] || 0) + 1;

  localStorage.setItem(
    "travelAnalytics",
    JSON.stringify(analytics)
  );
};

export const getTopDestination =
  () => {
    const analytics =
      JSON.parse(
        localStorage.getItem(
          "travelAnalytics"
        )
      ) || {};

    if (
      !analytics.destinations
    ) {
      return "No Data";
    }

    const entries =
      Object.entries(
        analytics.destinations
      );

    if (entries.length === 0) {
      return "No Data";
    }

    return entries.sort(
      (a, b) => b[1] - a[1]
    )[0][0];
  };
  export const getDestinationStats = () => {
  const analytics =
    JSON.parse(
      localStorage.getItem(
        "travelAnalytics"
      )
    ) || {};

  return (
    analytics.destinations || {}
  );
};