const getQueryString = (queries) => {
  const keys = Object.keys(queries);
  return keys.reduce((prev, curr, id) => {
    let result = prev;
    if (queries[curr] === 0 || queries[curr]) {
      result += `${curr}=${queries[curr]}`;

      if (id < keys.length - 1) result += "&";
    }

    return result;
  }, "");
};

export { getQueryString };
