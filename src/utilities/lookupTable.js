module.exports = iterable => {
  const obj = {};
  for (let el of iterable) {
    obj[el.app_id] = true;
  }
  return obj;
};
