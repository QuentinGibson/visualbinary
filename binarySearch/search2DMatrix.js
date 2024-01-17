export function searchMatrix(matrix, target) {
  let rowR = matrix.length - 1, rowL = 0, boundryRow = -1

  while (rowL <= rowR) {
    let mid = Math.floor(rowL + ((rowR - rowL) / 2))
    if (target < matrix[mid][0]) {
      rowR = mid - 1
    } else if (target > matrix[mid][matrix[mid].length - 1]) {
      rowL = mid + 1
    } else {
      boundryRow = mid
      break
    }
  }
  if (boundryRow === -1) return false
  let indexRow = matrix[boundryRow]
  let columnR = indexRow.length - 1,
    columnL = 0
  while (columnL <= columnR) {
    let mid = Math.floor(columnL + ((columnR - columnL) / 2))
    if (target < indexRow[mid]) {
      columnR = mid - 1
    } else if (target > indexRow[mid]) {
      columnL = mid + 1
    } else if (target === indexRow[mid]) {
      return true
    }
  }
  return false
}
