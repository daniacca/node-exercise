/**
 * Circular type of Array where every element
 * could be a value of @typedef T or an array
 * of @typedef ValueOrArrayOfValues
 */
export type ValueOrArrayOfValues<T> = (T | ValueOrArrayOfValues<T>)[];

/**
 * Flatten array
 * @param array an array of @typedef ValueOrArrayOfValues<T>
 * with arbitrary nested array
 * @returns a flatted array of @typedef T elment
 */
export function flatten<T>(array: ValueOrArrayOfValues<T>): T[] {
  let ret = [];
  for (const item of array) {
    if (Array.isArray(item)) ret = ret.concat(flatten(item));
    else ret.push(item);
  }
  return ret;
}
