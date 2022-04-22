export function bubbleSort<T>(array: T[], comparer: (a: T, b: T) => number) {
  function sortLoop(arr: T[], n = arr.length): T[] {
    if (n === 1) return arr;
    for (let i = 0; i < n - 1; i++) {
      if (comparer(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    return sortLoop(arr, n - 1);
  }

  return sortLoop(array);
}
