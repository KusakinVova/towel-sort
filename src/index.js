
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  if(matrix === undefined || matrix.length === 0) return [];

  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    if(i%2 == 0) 
      array.push(...matrix[i] );
    if(i%2 == 1) 
      array.push(...matrix[i].reverse() )
  }
  return array;
}
