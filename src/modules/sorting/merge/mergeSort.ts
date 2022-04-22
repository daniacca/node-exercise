export function mergeSort<T>(array: T[], comparer: (a: T, b: T) => number): T[] {
  const merge = (l: T[], r: T[]) => {
    const arr = [];
    while (l.length && r.length) {
      if (comparer(l[0], r[0]) < 0) {
        arr.push(l.shift());
      } else {
        arr.push(r.shift());
      }
    }
    return [...arr, ...l, ...r];
  };

  if (array.length < 2) {
    return array;
  }

  const half = array.length / 2;
  const left = array.splice(0, half);
  return merge(mergeSort(left, comparer), mergeSort(array, comparer));
}
