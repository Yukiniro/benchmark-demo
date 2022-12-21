const Benchmark = require("benchmark");

const suite = new Benchmark.Suite();

const arr = [];
for (let i = 0; i < 10000; i++) {
  arr.push(i);
}

// add tests
suite
  .add("for", function () {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i] * 2);
    }
  })
  .add("forEach", function () {
    const newArr = [];
    arr.forEach((value) => newArr.push(value * 2));
  })
  .add("while", function () {
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
      newArr.push(arr[i] * 2);
      i++;
    }
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: true });
