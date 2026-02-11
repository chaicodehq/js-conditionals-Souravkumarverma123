/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
 
  if (size !== "small" && size !== "medium" && size !== "large") {
    return -1;
  }

  let amount = 0;
  if (size === "small") {
    amount = 3;
  } else if (size === "medium") {
    amount = 4;
  } else if (size === "large") {
    amount = 5;
  }

  if (type !== "regular" && type !== "latte" && type !== "cappuccino" && type !== "mocha") {
    return -1;
  }

 
  let special_amount = 0;
  if (type === "regular") {
    special_amount = 0;
  } else if (type === "latte") {
    special_amount = 1;
  } else if (type === "cappuccino") {
    special_amount = 1.5;
  } else if (type === "mocha") {
    special_amount = 2;
  }

  let extra_amount = 0;
  if (extras.whippedCream === true) {
    extra_amount += 0.5;
  }
  if (extras.extraShot === true) {
    extra_amount += 0.75;
  }

  let total_amount = amount + special_amount + extra_amount;
  return Math.round(total_amount * 100) / 100;
}
