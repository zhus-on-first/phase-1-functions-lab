function distanceFromHqInBlocks(blocks) {
  return Math.abs(42 - blocks);
}

function distanceFromHqInFeet(blocks) {
  return Math.abs(264 * (42 - blocks));
}

function distanceTravelledInFeet(start, end) {
  return 264 * Math.abs(start - end);
}

function calculatesFarePrice(start, end) {
  if (264 * Math.abs(start - end) <= 400) {
    return 0;
  } else if (
    264 * Math.abs(start - end) > 400 &&
    264 * Math.abs(start - end) <= 2000
  ) {
    return Math.abs(0.02 * (400 - 264 * Math.abs(start - end)));
  } else if (
    264 * Math.abs(start - end) > 2000 &&
    264 * Math.abs(start - end) <= 2500
  ) {
    return 25;
  } else if (264 * Math.abs(start - end) > 2500) {
    return "cannot travel that far";
  }
}
