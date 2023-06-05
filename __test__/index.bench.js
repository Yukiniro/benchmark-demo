import { bench } from "vitest";

const LENGTH = 10000;
const createArray = () => {
  const array = [];
  array.length = LENGTH;
  array.fill(1);
  return array;
};

bench("for", () => {
  let sum = 0;
  const arr = createArray();
  for (let i = 0; i < LENGTH; i++) {
    sum += arr[i];
  }
  return sum;
});
bench("while", () => {
  let sum = 0;
  let i = 0;
  const arr = createArray();
  while (i < LENGTH) {
    sum += arr[i];
    i++;
  }
  return sum;
});
bench("forEach", () => {
  let sum = 0;
  const arr = createArray();
  arr.forEach((v) => (sum += v));
  return sum;
});
bench("reduce", () => {
  const arr = createArray();
  return arr.reduce((preValue, curValue) => {
    return preValue + curValue;
  }, 0);
});
