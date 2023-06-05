import { Bench } from "tinybench";

const bench = new Bench();

const LENGTH = 10000;
const createArray = () => {
  const array = [];
  array.length = LENGTH;
  array.fill(1);
  return array;
};

bench
  .add("for", () => {
    let sum = 0;
    const arr = createArray();
    for (let i = 0; i < LENGTH; i++) {
      sum += arr[i];
    }
    return sum;
  })
  .add("while", () => {
    let sum = 0;
    let i = 0;
    const arr = createArray();
    while (i < LENGTH) {
      sum += arr[i];
      i++;
    }
    return sum;
  })
  .add("forEach", () => {
    let sum = 0;
    const arr = createArray();
    arr.forEach((v) => (sum += v));
    return sum;
  })
  .add("reduce", () => {
    let sum = 0;
    const arr = createArray();
    return arr.reduce((preValue, curValue) => {
      return preValue + curValue;
    }, sum);
  });

  await bench.run();
  console.table(bench.table());
