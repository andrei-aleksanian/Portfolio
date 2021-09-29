/*
This function generates a map of ids which then
help create new ids for new objects of the same prefix
for the whole application.
*/

const idCollection = {};

export default (prefix) => {
  if (!idCollection[prefix]) {
    idCollection[prefix] = 1;
    return `${prefix}-${0}`;
  }

  idCollection[prefix] += 1;

  return `${prefix}-${idCollection[prefix] - 1}`;
};
