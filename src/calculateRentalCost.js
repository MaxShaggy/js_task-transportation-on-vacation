/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  for (let i = 1; i <= days; i++) {
    sum += 40;
  }

  if (days >= 3) {
    sum = sum - 20;
  }

  if (days >= 7) {
    sum = sum - 30;
  }

  return sum;
}

module.exports = calculateRentalCost;
