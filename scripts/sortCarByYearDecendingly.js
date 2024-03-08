function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Cara 1 [built-in method]
  // result.sort((a, b) => b.year - a.year);

  // Cara 2 Algoritma Sorting Bubble Sort
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j].year < result[j + 1].year) {
        // Tukar posisi
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  // Cara 3 Algoritma Sorting Bubble Sort (Menggunakan Code Yang Sama Dengan Ascending Tetapi diakhir di reverse)
  // for (let i = 0; i < result.length - 1; i++) {
  //   for (let j = 0; j < result.length - 1 - i; j++) {
  //     if (result[j].year > result[j + 1].year) {
  //       // Tukar posisi
  //       const temp = result[j];
  //       result[j] = result[j + 1];
  //       result[j + 1] = temp;
  //     }
  //   }
  // }
  // result.reverse();

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
