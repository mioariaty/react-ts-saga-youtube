const converTime = (value: string): string => {
  const values: string[] = value.match(/(\d+)(?=[HMS])/g) || [];

  const result: string = values
    .map(val => {
      if (val.length < 2) {
        val = '0' + val;
      }
      return val;
    })
    .join(':');

  return result;
};
export default converTime;
