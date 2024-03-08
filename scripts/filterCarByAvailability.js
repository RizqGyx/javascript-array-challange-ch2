function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Cara 1 [built-in method] (Forbiden Way)
  // result = cars.filter((car) => car.available === true);

  // Cara 2
  for (const car of cars) {
    if (car.available) {
      result.push(car);
    }
  }

  console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
