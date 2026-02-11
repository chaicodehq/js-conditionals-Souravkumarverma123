/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  if (billAmount <= 0) return null;

  // Check if serviceRating is an integer between 1 and 5
  if (!Number.isInteger(serviceRating) || serviceRating < 1 || serviceRating > 5) return null;

  let tipAmount;
  let tipPercentage;
  let totalAmount;

  if (serviceRating === 1) {
    tipPercentage = 5;
    tipAmount = (0.05 * billAmount)
    totalAmount = billAmount + tipAmount;

    return {
      "tipPercentage": Number(tipPercentage),
      "tipAmount": Number(tipAmount.toFixed(2)),
      "totalAmount": Number(totalAmount.toFixed(2))
    }
  }
  if (serviceRating === 2) {
    tipPercentage = 10;
    tipAmount = (0.1 * billAmount);
    totalAmount = billAmount + tipAmount;
    return {
      "tipPercentage": Number(tipPercentage),
      "tipAmount": Number(tipAmount.toFixed(2)),
      "totalAmount": Number(totalAmount.toFixed(2))
    }
  }
  if (serviceRating === 3) {
    tipPercentage = 15;
    tipAmount = (0.15 * billAmount);
    totalAmount = billAmount + tipAmount;
    return {
      "tipPercentage": Number(tipPercentage),
      "tipAmount": Number(tipAmount.toFixed(2)),
      "totalAmount": Number(totalAmount.toFixed(2))
    }
  }
  if (serviceRating === 4) {
    tipPercentage = 20;
    tipAmount = (0.20 * billAmount);
    totalAmount = billAmount + tipAmount;

    return {
      "tipPercentage": Number(tipPercentage),
      "tipAmount": Number(tipAmount.toFixed(2)),
      "totalAmount": Number(totalAmount.toFixed(2))
    }
  }
  if (serviceRating === 5) {
    tipPercentage = 25;
    tipAmount = (0.25 * billAmount);
    totalAmount = billAmount + tipAmount;

    return {
      "tipPercentage": (tipPercentage),
      "tipAmount": Number(tipAmount.toFixed(2)),
      "totalAmount": Number(totalAmount.toFixed(2))
    }
  }
}

let final_output = calculateTip(5000, 3)
console.log(final_output);


