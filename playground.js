function dfs(root, max_sofar) {
  if (!root) return 0
  let total = 0
  if (root.val >= max_sofar) total++
  total += dfs(root.left, Math.max(max_sofar, root.val))
  total += dfs(root.right, Math.max(max_sofar, root.val))
  return total
}

function visibleTreeNode(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  return (root !== null) ? dfs(root, Number.NEGATIVE_INFINITY) : 0;
}

function feasible(piles, h, speed) {
  let totalHours = 0
  for (let pile of piles) {
    let dividen = Math.ceil(pile / speed)
    totalHours += dividen
  }
  return totalHours <= h
}

export function minEatingSpeed(piles, h) {
  let left = 0
  let right = piles.reduce((a, b) => a + b)
  let boundryIndex = -1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (feasible(piles, h, mid)) {
      boundryIndex = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return boundryIndex
};

export var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  let boundryIndex = -1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] <= nums[nums.length - 1]) {
      right = mid - 1
      boundryIndex = mid
    } else {
      left = mid + 1
    }
  }
  return nums[boundryIndex]
};

export var TimeMap = function () {

};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {

};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {

};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */