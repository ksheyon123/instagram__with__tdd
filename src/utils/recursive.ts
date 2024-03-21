const recursive = (d: any, cb: Function) => {
  const id = "1";
  return recursive(id, () => {});
};
