function travelSeat(passengers, seatColumn) {
  passengers.sort();

  if (seatColumn <= 0) {
    return "Invalid number";
  }
  if (passengers.length === 0) {
    return "Oops! tickets not sold!";
  }
  let passengers1 = passengers.slice(0, seatColumn);
  let passengers2 = passengers.slice(seatColumn);

  if (passengers2.length < seatColumn && passengers2.length > 0) {
    while (passengers2.length < seatColumn) {
      passengers2.push("Seat available");
    }
  }

  if (passengers2.length === 0 && passengers.length < seatColumn) {
    while (passengers1.length < seatColumn) {
      passengers1.push("Seat available");
    }
  }

  let arr = new Array(passengers1, passengers2);

  if (passengers2.length === 0) {
    arr = [passengers1];
  }
  return arr;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat;
