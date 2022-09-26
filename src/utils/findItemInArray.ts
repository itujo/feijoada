function findItemInArray<T>(
  array: T[],
  key: keyof T,
  keyToFind: string | number,
) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i]![key] === keyToFind) return array[i];
  }

  return null;
}

export { findItemInArray };
