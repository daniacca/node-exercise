export function insertionSort<T>(arr: T[], comparer: (a: T, b: T) => number): void {
  const insSort = (a: T[], n: number = arr.length) => {
    // Base case
    if (n <= 1) return;

    // Sort first n-1 elements
    insSort(a, n - 1);

    /**
     * Insert last element at its correct position in sorted array.
     * Move elements of arr[0..i-1], that are greater than key,
     * to one position ahead of their current position
     * */
    const last = a[n - 1];
    let j = n - 2;
    while (j >= 0 && comparer(a[j], last) > 0) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = last;
  };

  insSort(arr);
}
