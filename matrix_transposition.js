const transpose = function(matrix) {
  let newMatrix = [];
  //create empty arrays to push value in them later
  //it should look like[[], [], [], []]
  for (let i = 0; i < 4; i++) {
    newMatrix.push([]);
  }
  //wanna change it to [[1,1,1], ......]
  //push 3 things to newMatrix[0], newMatrix[1], newMatrix[2], newMatrix[3]

  //loop through the 3 arrays inside the matrix
  //first for loop will loop again when the nested for loop finish, which is 4 times
  for (let col = 0; col < matrix[0].length; col++) {
    //loop through the (4) index of each array
    for (let row = 0; row < matrix.length; row++) {
      //the [col] will be the same number until the inner is finish and go on to the next round
      //which means [col] will plus one on the next round
      newMatrix[col].push(matrix[row][col]);
      // for the first 3 steps of our double-loop, col=0
      // and errthing work bcuz we working with newMatrix[0]
    }
  }
  return newMatrix; //how many elements should newMatrix have?
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],]));

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

//pair coding with Tyree