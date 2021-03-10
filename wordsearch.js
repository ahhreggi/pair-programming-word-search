// PAIR PROGRAMMING ACTIVITY - WORD SEARCH
// Reggi & Jared

const wordSearch = (letters, word) => {
  return horizontalJoin(letters, word) || horizontalJoin(transpose(letters), word);
};

const horizontalJoin = (matrix, word) => {
  const searchWord = word ? word.split(' ').join('') : '';
  const joinedArray = matrix.map(ls => ls.join(''));
  if (word) {
    for (let l of joinedArray) {
      if (l.includes(searchWord)) {
        return true;
      }
    }
  }
  return false;
};

const transpose = function(matrix) {
  // Initialize a new array
  const transposedMatrix = [];
  // Get number of columns
  const columns = matrix[0].length;
  // For each column index make new row
  for (let i = 0; i < columns; i++) {
    const newRow = [];
    // For each row in original
    for (let row in matrix) {
      // Grab element at current column index and add to new row
      newRow.push(matrix[row][i]);
    }
    // Add new row to grid
    transposedMatrix.push(newRow);
  }
  // Return resulting grid
  return transposedMatrix;
};

module.exports = wordSearch;