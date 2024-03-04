export const loginValidate = (val: string) => {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!reg.test(val)) return false;
  else return true;
};

export const findIdxByKey = (items, d, key) => {
  const idx = items.findIndex((e) => e[key] === d[key]);
};
