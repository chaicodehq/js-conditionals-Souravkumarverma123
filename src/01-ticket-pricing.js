/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket ticket_price system. The manager hands you a sticky note
 * with the ticket_price rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  let ticket_price = 0;
  if (age < 0 || age == NaN) return -1;

  if (!isWeekend) {
    if (age <= 12) {
      ticket_price += 8;
      console.log(
        `your age is in chidren category and you your ticket price is ${ticket_price}`
      );
    } else if (age <= 17) {
      ticket_price += 12;
      console.log(
        `your age is in teen category and you your ticket price is ${ticket_price}`
      );
    } else if (age <= 59) {
      ticket_price += 15;
      console.log(
        `your age is in adult category and you your ticket price is ${ticket_price}`
      );
    } else {
      ticket_price += 10;
      console.log(
        `your age is in senior category and you your ticket price is ${ticket_price}`
      );
    }
    return ticket_price;
  }

  // if it's a weekend
  if (isWeekend) {
    ticket_price = 3;
    if (age <= 12) {
      ticket_price += 8;
      console.log(
        `your age is in chidren category and you your ticket price is ${ticket_price}`
      );
    } else if (age <= 17) {
      ticket_price += 12;
      console.log(
        `your age is in teen category and you your ticket price is ${ticket_price}`
      );
    } else if (age <= 59) {
      ticket_price += 15;
      console.log(
        `your age is in adult category and you your ticket price is ${ticket_price}`
      );
    } else {
      ticket_price += $10;
      console.log(
        `your age is in senior category and you your ticket price is ${ticket_price}`
      );
    }
    return ticket_price;
  }
}

let  result = getTicketPrice(45, true);
console.log(result);
