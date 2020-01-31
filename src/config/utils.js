export const sortByAlphabet = (array, parametr, reverse) => {
  if (reverse) {
    return array.sort((a, b) =>
      a[parametr].localeCompare(b[parametr]),
    );
  }
  return array.sort((a, b) => b[parametr].localeCompare(a[parametr]));
};

export const sortByNumber = (array, parametr, reverse) => {
  if (reverse) {
    return array.sort(
      (a, b) => parseFloat(b[parametr]) - parseFloat(a[parametr]),
    );
  }
  return array.sort(
    (a, b) => parseFloat(a[parametr]) - parseFloat(b[parametr]),
  );
};

export const isIncludeText = (text, filter) =>
  text.toLowerCase().includes(filter.toLowerCase());
