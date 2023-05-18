import { Bench } from "tinybench";
import { createCanvas } from "canvas";

const bench = new Bench({ time: 100 });
const canvas1 = createCanvas(500, 500);
const canvas2 = createCanvas(500, 500);
const canvas3 = createCanvas(500, 500);

function rederBK(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#F00";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

bench
  .add("size", () => {
    rederBK(canvas1);
    canvas1.width = canvas1.width;
    canvas1.height = canvas1.height;
  })
  .add("fillRect", async () => {
    rederBK(canvas2);
    canvas2.getContext("2d").fillStyle = "#FFF";
    canvas2.getContext("2d").fillRect(0, 0, canvas2.width, canvas2.height);
  })
  .add("clearRect", async () => {
    rederBK(canvas3);
    canvas3.getContext("2d").clearRect(0, 0, canvas3.width, canvas3.height);
  });

await bench.run();

console.table(bench.table());
