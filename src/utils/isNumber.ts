const isNumber = (char: string | number) => {
  if (typeof char !== 'string') {
    return false;
  }

  if (char.trim() === '') {
    return false;
  }

  return !Number.isNaN(char);
};

export { isNumber };
