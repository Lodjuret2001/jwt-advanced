function parseTimeDuration(durationString) {
  const numericValue = parseInt(durationString);
  const unit = durationString.slice(-1);

  switch (unit) {
    case "s":
      return numericValue * 1000; // Convert seconds to milliseconds
    case "m":
      return numericValue * 1000 * 60; // Convert minutes to milliseconds
    case "h":
      return numericValue * 1000 * 60 * 60; // Convert hours to milliseconds

    default:
      throw new Error("Invalid time unit");
  }
}

export default parseTimeDuration;
