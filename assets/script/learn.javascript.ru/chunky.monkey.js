function chunkArrayInGroups(arr, size) {
  let result = [];
  let start = 0,
    end = size;

  while (start < arr.length) {
    result.push(arr.slice(start, end));
    start += size;
    end += size;
  }

  return result;
}

//[["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
